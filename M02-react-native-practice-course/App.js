import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const inputTextHandler = (text) => {
    setGoalText(text);
  };
  const addGoalHandler = () => {
    setGoalsList((goals) => [...goals, goalText]);
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
        <Button onPress={addGoalHandler} color='#0dcddf' title='Tap For Luck' />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.goalsHeading}> List of Goals</Text>
        {goalsList.map((goal) => (
          <Text key={goal}> {goal}</Text>
        ))}
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
    width: "65%",
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
});
