import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/Button";
import { useState } from "react";
import Heading from "../components/Heading";
import Colors from "../utils/colors";
import Card from "../components/Card";
import Label from "../components/Label";

export default function StartGame({ setUserValidNumber }) {
  const [inputvalue, setInputValue] = useState("13");

  const textChangeHandler = (text) => {
    setInputValue(text);
  };

  const resetInput = () => {
    setInputValue("");
  };

  const submitNumberHandler = () => {
    // check user input
    const parsedInput = parseInt(inputvalue);

    if (isNaN(parsedInput) || parsedInput <= 0 || parsedInput >= 99) {
      Alert.alert("Invalid user Input", "Input must be between 0 and 99", [
        { text: "okay", onPress: resetInput, style: "destructive" },
      ]);

      return;
    }
    setUserValidNumber(parsedInput);
  };

  return (
    <View style={styles.container}>
      <Heading headingText={"Pick a Number🔢!"}>
        <Text style={styles.subtitle}>any Number</Text>
      </Heading>
      <Card>
        <Label>Enter your Number</Label>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          onChangeText={textChangeHandler}
          cursorColor={Colors.secondary500}
          keyboardType='number-pad'
          value={inputvalue}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnWidth}>
            <PrimaryButton onPresshandler={resetInput}>Cancel</PrimaryButton>
          </View>
          <View style={styles.btnWidth}>
            <PrimaryButton onPresshandler={submitNumberHandler} primary>
              Start
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 16,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  numberInput: {
    borderColor: Colors.secondary500,
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: "auto",
    height: 50,
    width: 150,
    marginBottom: 20,
    color: Colors.secondary500,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  btnWidth: {
    flex: 1,
  },
});
