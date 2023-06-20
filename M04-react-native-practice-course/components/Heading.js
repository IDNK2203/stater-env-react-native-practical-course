import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

const Heading = ({ children, headingText }) => {
  return (
    <View style={styles.headingContainer}>
      <Text style={styles.heading}>{headingText}</Text>
      {/* {<Text style={styles.subtitle}>any Number</Text>} */}
      {children}
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 16,
    marginTop: 24,
    marginBottom: 0,
    color: Colors._accent,
  },
  headingContainer: {
    margin: 10,
  },
});
