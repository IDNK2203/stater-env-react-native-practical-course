import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/Button";
import Card from "../components/Card";
import Itext from "../components/Itext";
import Colors from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import RoundLog from "../components/RoundLog";

let minB = 1;
let maxB = 100;

const Game = ({ userValidNumber, gameoverHandler, roundCount }) => {
  const { width } = useWindowDimensions();
  const [currentGuess, setCurrentGuess] = useState(0);
  const [guessNumberRounds, setGuessNumberRounds] = useState([]);

  const roundNumber = guessNumberRounds.length;
  useEffect(() => {
    setCurrentGuess(generateRandomBtw(minB, maxB, userValidNumber));
  }, []);

  useEffect(() => {
    if (currentGuess === userValidNumber) {
      Alert.alert("You have won the Game", "Congratulations 🥳", [
        { text: "Cancel", style: "cancel" },
      ]);
      minB = 1;
      maxB = 100;
      gameoverHandler();
    }
  }, [currentGuess, userValidNumber]);

  function generateRandomBtw(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
      return generateRandomBtw(min, max, exclude);
    } else {
      roundCount.current += 1;
      setGuessNumberRounds((values) => [rndNum, ...values]);
      return rndNum;
    }
  }

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

  let content = (
    <>
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
    </>
  );

  let DynPaddingTop = 50;
  if (width > 500) {
    DynPaddingTop = 25;
    content = (
      <>
        <View style={styles.crtlsContainer}>
          <View style={styles.btnContainer}>
            <View style={styles.btnWidth}>
              <PrimaryButton
                onPresshandler={guideNumberGuess.bind(this, "lower")}
              >
                <Ionicons name='md-remove' size={24} color={Colors.primary} />
              </PrimaryButton>
            </View>
            <Card style={[styles.guessNumberCard, styles.btnWidth]}>
              <Itext>{currentGuess}</Itext>
            </Card>
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
      </>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: DynPaddingTop }]}>
      <Heading headingText={"your number ?🤔"} />
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessNumberRounds}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <RoundLog index={roundNumber - index}> {item} </RoundLog>
          )}
        />
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    padding: 16,
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    width: "100%",
    flex: 1,
    paddingVertical: 16,
  },
  crtlsContainer: {
    width: "100%",
  },
  guessNumberCard: {
    backgroundColor: Colors.secondary500,
    borderColor: Colors.primary,
    borderWidth: 3,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    width: "100%",
  },
  crtlsText: {
    textAlign: "center",
    marginVertical: 16,
    fontSize: 20,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnWidth: {
    flex: 1,
  },
});
