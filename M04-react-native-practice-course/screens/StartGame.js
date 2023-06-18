import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/Button";
import { useState } from "react";

export default function StartGame() {
  const [inputvalue, setInputValue] = useState("13");

  const textChangeHandler = (text) => {
    setInputValue(text);
  };

  const submitNumberHandler = () => {
    // check user input
    console.log("check user input");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Pick a Number🔢!</Text>
        <Text style={styles.subtitle}>any Number</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          onChangeText={textChangeHandler}
          cursorColor={"#FFC857"}
          keyboardType='number-pad'
          value={inputvalue}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnWidth}>
            <PrimaryButton onPress={submitNumberHandler}>Cancel</PrimaryButton>
          </View>
          <View style={styles.btnWidth}>
            <PrimaryButton primary>Start</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 16,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 16,
    marginTop: 24,
    marginBottom: 0,
    color: "#2E4052",
  },
  headingContainer: {
    margin: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#412234",
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#412234",
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
  },
  numberInput: {
    borderColor: "#FFC857",
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: "auto",
    height: 50,
    width: 150,
    margin: 20,
    color: "#FFC857",
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
