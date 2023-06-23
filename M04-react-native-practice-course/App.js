import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./utils/colors";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userValidNumber, setUserValidNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // const toggleUserScreen = () => {
  //   setUserValidNumber((e) => !e);
  // };

  const gameoverHandler = () => {
    setGameOver((e) => !e);
  };

  let screen = <StartGame setUserValidNumber={setUserValidNumber} />;
  if (userValidNumber) {
    screen = (
      <Game
        userValidNumber={userValidNumber}
        gameoverHandler={gameoverHandler}
      />
    );
  }

  if (gameOver) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient
      colors={[Colors.secondary100, Colors.primary]}
      style={styles.screenContainer}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.screenContainer}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.screenContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
});
