import { StyleSheet, Text, TextInput, View } from "react-native";

export default function StartGame() {
  return (
    <View>
      <Text style={styles.heading}>Pick a Number🔢!</Text>
      <View>
        <TextInput />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
});
