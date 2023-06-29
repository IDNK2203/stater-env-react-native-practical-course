import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import Colors from "../utils/colors";
import PrimaryButton from "../components/Button";

export default function GameOver({
  userValidNumber,
  setUserValidNumber,
  gameoverHandler,
  roundCount,
}) {
  const restartGame = () => {
    roundCount.current = 0;
    setUserValidNumber(null);
    gameoverHandler();
  };

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
          You took
          <Text style={styles.summaryHighlight}> {roundCount.current} </Text>
          number of rounds to guess the number{" "}
          <Text style={styles.summaryHighlight}>{userValidNumber}</Text>
        </Text>
      </View>
      <View style={styles.btnWidth}>
        <PrimaryButton primary onPresshandler={restartGame}>
          Restart
        </PrimaryButton>
      </View>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 16,
    alignItems: "center",
    flex: 1,
  },
  imgContainer: {
    height: deviceWidth > 320 ? 280 : 180,
    width: deviceWidth > 320 ? 280 : 180,
    borderRadius: deviceWidth > 320 ? 140 : 90,
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
  summaryHighlight: {
    fontWeight: "bold",
  },
  btnWidth: {
    width: "60%",
  },
});
