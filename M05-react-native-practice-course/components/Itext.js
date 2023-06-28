import { StyleSheet, Text } from "react-native";
import Colors from "../utils/colors";

const Itext = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Itext;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 36,
    margin: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
