import {
  Dimensions, //import the dimemsion API
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Heading from "../components/Heading";
import Colors from "../utils/colors";
import PrimaryButton from "../components/Button";

export default function GameOver({}) {
  const restartGame = () => {};

  return (
    <View style={styles.container}>
      <Heading headingText={"Challenge Completed 🚀"} />
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View style={styles.btnWidth}>
        <PrimaryButton primary onPresshandler={restartGame}>
          Restart
        </PrimaryButton>
      </View>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width; // Grab the Device width.

const styles = StyleSheet.create({
  imgContainer: {
    // used with the tenary operator to set styles based on the device width
    height: deviceWidth > 320 ? 280 : 180, //👈 dynamically set component height
    width: deviceWidth > 320 ? 280 : 180, // 👈 dynamically set component width
    borderRadius: deviceWidth > 320 ? 140 : 90, //👈 dynamically set component border radius.
    borderWidth: 8,
    borderColor: Colors.secondary500,
    overflow: "hidden",
    margin: 16,
  },
});
