import { Image, StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import Colors from "../utils/colors";

export default function GameOver() {
  return (
    <View style={styles.container}>
      <Heading headingText={"Challenge Completed 🚀"} />
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>
          You took X number of rounds to guess the number Y
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 16,
    alignItems: "center",
    flex: 1,
  },
  imgContainer: {
    height: 240,
    width: 240,
    borderRadius: 120,
    borderWidth: 8,
    borderColor: Colors.secondary500,
    overflow: "hidden",
    margin: 16,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  summaryContainer: {
    margin: 16,
  },
  summary: {
    fontSize: 16,
    textAlign: "center",
  },
});
