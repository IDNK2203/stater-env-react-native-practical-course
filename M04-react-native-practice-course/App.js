import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={styles.heading}>Goal Setter🎯!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});
