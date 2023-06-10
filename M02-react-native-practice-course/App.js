import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const inputTextHandler = (text) => {
    setGoalText(text);
  };
  const addGoalHandler = () => {
    setGoalsList((goals) => [
      ...goals,
      { goal: goalText, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Goal Setter🎯!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={inputTextHandler}
          style={styles.textInput}
          placeholder='set a goal'
        />
        <Button onPress={addGoalHandler} color='#0dcddf' title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsHeading}> List of Goals</Text>

        <FlatList
          data={goalsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.goalListItem}>
              <Text style={styles.goalText}>{item.goal}</Text>
            </View>
          )}
        />
      </View>
    </View>
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
  },
  inputContainer: {
    flex: 1,
    marginTop: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  textInput: {
    height: 45,
    marginRight: 8,
    width: "70%",
    padding: 8,
    borderColor: "#ccc",
    borderWidth: 2,
  },
  goalsContainer: {
    flex: 6,
  },
  goalsHeading: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: "auto",
    borderColor: "#ccc",
  },
  goalListItem: {
    backgroundColor: "#fccdd3",
    borderRadius: 4,
    padding: 12,
    margin: 8,
  },
  goalText: {
    color: "white",
  },
});
