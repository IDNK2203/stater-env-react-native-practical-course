import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function GoalInput({ addGoalHandler }) {
  const [goalText, setGoalText] = useState("");
  const inputTextHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandlerWrapper = () => {
    addGoalHandler(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={inputTextHandler}
        style={styles.textInput}
        placeholder='set a goal'
        value={goalText}
      />
      <Button
        onPress={addGoalHandlerWrapper}
        color='#0dcddf'
        title='Add Goal'
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
