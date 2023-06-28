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
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 24,
    margin: 16,
    marginTop: 24,
    marginBottom: 0,
    color: Colors._accent,
    textTransform: "capitalize",
    fontWeight: "500",
    // width:300,
    // max-width:"800"
  },
  headingContainer: {
    margin: 10,
  },
});
