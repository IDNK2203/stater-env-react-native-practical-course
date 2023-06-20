import { StyleSheet, Text, View } from "react-native";
import Heading from "../components/Heading";
import Colors from "../utils/colors";
import GuessedNumber from "../components/GuessedNumber";
import { useState } from "react";

const Game = ({ userValidNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userValidNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  return (
    <View style={styles.container}>
      <Heading headingText={"Opponent's Guesses "} />
      <GuessedNumber>{currentGuess}</GuessedNumber>
      <View>
        <Text>Higher or Lower</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
