import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.texting}>I'm gom show you how great I am.</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  texting: {
    // flex: 1,
    backgroundColor: "purple",
    // fontSize: "32px",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
