import { StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/Button";

export default function StartGame() {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Pick a Number🔢!</Text>
        <Text style={styles.subtitle}>any Number</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          cursorColor={"#FFC857"}
          keyboardType='number-pad'
          // value=""
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnWidth}>
            <PrimaryButton>Cancel</PrimaryButton>
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
  screenContainer: {
    padding: 16,
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff1d4ae",
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
    color: "#FFC857",
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
