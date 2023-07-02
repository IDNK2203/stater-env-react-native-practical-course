import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useRef, useState } from "react";
import Colors from "./utils/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userValidNumber, setUserValidNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const roundCount = useRef(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const toggleUserScreen = (value) => {
    setUserValidNumber(value);
  };

  const gameoverHandler = () => {
    setGameOver((e) => !e);
  };

  let screen = <StartGame setUserValidNumber={toggleUserScreen} />;
  if (userValidNumber) {
    screen = (
      <Game
        userValidNumber={userValidNumber}
        gameoverHandler={gameoverHandler}
        roundCount={roundCount}
      />
    );
  }

  if (userValidNumber && gameOver) {
    screen = (
      <GameOver
        roundCount={roundCount}
        userValidNumber={userValidNumber}
        setUserValidNumber={toggleUserScreen}
        gameoverHandler={gameoverHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style='dark' />
      <LinearGradient
        onLayout={onLayoutRootView}
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
    </>
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
