import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Goal Setter🎯!</Text>
        </View>
        <View style={styles.btn}>
          <Button
            onPress={toggleModalSwitch}
            color='#904E55'
            title='Add Goal'
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 16,
    marginTop: 24,
  },
});
