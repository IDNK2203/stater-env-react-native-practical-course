import { Alert, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { restrictedAxios } from "../httpClient/client";
import { useAuthContext } from "../store/authContext";

function WelcomeScreen() {
  const { dispatch } = useAuthContext();
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ["msg"],
    queryFn: async () => {
      const response = await restrictedAxios.get("message.json");
      return response.data;
    },
    retry: false,
  });

  if (isError && error.falseAuthState) {
    setTimeout(() => {
      dispatch({
        type: "LOGOUT",
      });
    }, 2000);
    Alert.alert("Access Denied", error.message);
  } else if (isError) {
    Alert.alert("Access Denied", error.response.message);
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{isSuccess && data}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
