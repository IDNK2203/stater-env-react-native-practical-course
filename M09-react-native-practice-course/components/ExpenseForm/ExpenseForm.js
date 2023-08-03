import { StyleSheet, Text, View, Pressable } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View style={styles.expenseFormBox}>
      <Text style={styles.expenseTitle}>Create A New Expense</Text>
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
    paddingVertical: 8,
    // width: "100%",
  },
  expenseTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    textAlign: "center",
    marginVertical: 8,
  },
});
