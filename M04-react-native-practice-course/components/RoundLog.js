import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

const RoundLog = ({ children, index }) => {
  return (
    <View style={styles.container}>
      <Text> Round {index}</Text>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary500,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    paddingHorizontal: 16,
    height: 55,
    margin: 8,
    borderColor: Colors.primary,
    borderWidth: 3,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
});

export default RoundLog;
