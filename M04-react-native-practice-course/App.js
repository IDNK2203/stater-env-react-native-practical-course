import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [userPickedValidNumber, setUserPickedValidNumber] = useState(false);

  const toggleUserScreen = () => {
    setUserPickedValidNumber((e) => !e);
  };

  let screen = <StartGame setUserPickedValidNumber={toggleUserScreen} />;
  if (userPickedValidNumber) {
    screen = <Game />;
  }

  return (
    <LinearGradient
      colors={["#fff1d4ae", "#412234"]}
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
