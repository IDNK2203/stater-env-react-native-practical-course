import { Alert, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "../store/authContext";

function WelcomeScreen() {
  const { state } = useAuthContext();
  const { data, isSuccess, isError, error } = useQuery({
    queryKey: ["msg"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rn-practical-course-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=" +
          state.accessToken
      );
      return response.data;
    },
  });

  if (isError) {
    Alert.alert("Access Denied", error.message);
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
