import { StyleSheet, Text, View, Pressable } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  return (
    <View style={styles.expenseFormBox}>
      <Text style={styles.expenseTitle}>Create A New Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label={"Amount"}
          style={styles.inputRowItem}
          inputConfig={{
            keyboardType: "number-pad",
            onChangeText: () => {},
          }}
        />

        <Input
          label={"Date"}
          style={styles.inputRowItem}
          inputConfig={{
            maxLength: 10,
            placeholder: "YYYY-MM-DD",
            onChangeText: () => {},
          }}
        />
      </View>
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
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  inputRowItem: {
    flex: 1,
  },
  expenseTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: "white",
    textAlign: "center",
    marginVertical: 8,
  },
});
