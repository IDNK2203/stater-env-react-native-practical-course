import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
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
        <StartGame />
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
