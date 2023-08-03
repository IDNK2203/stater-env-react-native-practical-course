import { StyleSheet, Text, View, TextInput } from "react-native";
import { colorPallete } from "../../utils/colors";

const Input = ({ inputConfig, label }) => {
  const inputStyle = [styles.input];
  if (inputConfig && inputConfig.multiline) {
    inputStyle.push(styles.multiLineInput);
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <TextInput style={inputStyle} {...inputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 4,
  },
  label: {
    fontSize: 20,
    color: colorPallete.Tyrianpurple2,
    marginVertical: 4,
  },
  input: {
    borderWidth: 4,
    borderRadius: 12,
    borderColor: colorPallete.Tyrianpurple2,
    backgroundColor: colorPallete.accent200,
    color: colorPallete.Richblack,
    padding: 12,
    marginBottom: 6,
    height: 60,
    fontSize: 18,
    width: "100%",
  },
  multiLineInput: {
    minHeight: 125,
    textAlignVertical: "top",
  },
});
