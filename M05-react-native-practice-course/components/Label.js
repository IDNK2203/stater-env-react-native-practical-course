import { StyleSheet, Text } from "react-native";
import Colors from "../utils/colors";

const Label = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Label;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    margin: 8,
    // fontWeight: "300",
    color: Colors.secondary500,
  },
});
