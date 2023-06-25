import { Alert, StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/Button";
import Card from "../components/Card";
import Itext from "../components/Itext";
import Colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

let minB = 1;
let maxB = 100;

function generateRandomBtw(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBtw(min, max, exclude);
  } else {
    return rndNum;
  }
}

const Game = ({ userValidNumber, gameoverHandler }) => {
  const [currentGuess, setCurrentGuess] = useState(0);
  useEffect(() => {
    setCurrentGuess(generateRandomBtw(minB, maxB, userValidNumber));
  }, []);

  useEffect(() => {
    if (currentGuess === userValidNumber) {
      Alert.alert("You have won the Game", "Congratulations 🥳", [
        { text: "Cancel", style: "cancel" },
      ]);
      gameoverHandler();
      console.log("you have won");
    }
  }, [currentGuess, userValidNumber]);

  const guideNumberGuess = (direction) => {
    if (
      (userValidNumber >= currentGuess && direction === "lower") ||
      (userValidNumber <= currentGuess && direction === "higher")
    ) {
      Alert.alert("Misleading Hint", "Don't cheat the computer", [
        { text: "Cancel", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxB = currentGuess;
    } else {
      minB = currentGuess + 1;
    }
    const gNumber = generateRandomBtw(minB, maxB, currentGuess);
    setCurrentGuess(gNumber);
  };

  return (
    <View style={styles.container}>
      <Heading headingText={"Is this your number ?🤔"} />
      <Card style={styles.guessNumberCard}>
        <Itext>{currentGuess}</Itext>
      </Card>
      <View style={styles.crtlsContainer}>
        <Text style={styles.crtlsText}>Higher or Lower</Text>
        <View style={styles.btnContainer}>
          <View style={styles.btnWidth}>
            <PrimaryButton
              onPresshandler={guideNumberGuess.bind(this, "lower")}
            >
              <Ionicons name='md-remove' size={24} color={Colors.primary} />
            </PrimaryButton>
          </View>
          <View style={styles.btnWidth}>
            <PrimaryButton
              onPresshandler={guideNumberGuess.bind(this, "higher")}
            >
              <Ionicons
                name='md-add'
                size={24}
                color={Colors.primary}
                style={{ fontWeight: "bold" }}
              />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 16,
    justifyContent: "flex-start",
    flex: 1,
  },
  crtlsContainer: {
    width: "100%",
  },
  guessNumberCard: {
    backgroundColor: Colors.secondary500,
  },
  crtlsText: {
    textAlign: "center",
    marginVertical: 16,
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnWidth: {
    flex: 1,
  },
});
