import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function GoalInput({
  addGoalHandler,
  modalSwitch,
  toggleModalSwitch,
}) {
  const [goalText, setGoalText] = useState("");
  const inputTextHandler = (text) => {
    setGoalText(text);
  };

  const cancelAddgoal = () => {
    setGoalText("");
    toggleModalSwitch();
  };

  const addGoalHandlerWrapper = () => {
    addGoalHandler(goalText);
    setGoalText("");
    toggleModalSwitch();
  };

  return (
    <Modal visible={modalSwitch} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          style={styles.goalImg}
          source={require("../assets/images/goal-dark.png")}
        />
        <TextInput
          onChangeText={inputTextHandler}
          style={styles.textInput}
          placeholder='set a goal'
          value={goalText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button onPress={cancelAddgoal} color='#904E55' title='cancel' />
          </View>
          <View style={styles.button}>
            <Button
              onPress={addGoalHandlerWrapper}
              color='#252627'
              title='Add Goal'
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  goalImg: {
    width: 150,
    height: 150,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2EFE9",
  },
  textInput: {
    height: 45,
    width: "90%",
    padding: 8,
    borderColor: "#ccc",
    borderWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-around",
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    height: 75,
  },
});
