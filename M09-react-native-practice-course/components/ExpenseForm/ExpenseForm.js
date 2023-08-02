import { StyleSheet, Text, View, Pressable } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View style={styles.expenseFormBox}>
      <Input
        label={"Amount"}
        inputConfig={{
          keyboardType: "number-pad",
          onChangeText: () => {},
        }}
      />

      <Input
        label={"Date"}
        inputConfig={{
          maxLength: 10,
          placeholder: "YYYY-MM-DD",
          onChangeText: () => {},
        }}
      />
      <Input
        label={"Description"}
        inputConfig={{
          onChangeText: () => {},
          multiline: true,
          // autoCapitalize: 'none'
          // autoCorrect: false // default is true
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  expenseFormBox: {
    marginBottom: 48,
    paddingVertical: 8,
    width: "100%",
    // flex: 1,
    minHeight: "auto",
  },
});
