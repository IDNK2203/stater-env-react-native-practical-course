import { StyleSheet, Text, View, Dimensions } from "react-native";
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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "open-sans-bold",
    textAlign: "center",
    fontSize: 24,
    // fontSize: deviceWidth > 280 ? 60 : 20,
    margin: 16,
    marginTop: 24,
    // marginTop: deviceWidth > 280 ? 60 : 24,
    marginBottom: 0,
    color: Colors._accent,
    textTransform: "capitalize",
    fontWeight: "500",
    width: 300,
    maxWidth: "70%",
  },
  headingContainer: {
    margin: 10,
  },
});
