import { StyleSheet, Text, View } from "react-native";

const ExpenseSummary = ({ expenses, expensePeriod }) => {
  const expenseSum = expenses.reduce((sum, item) => sum + item.amount, 0);
  console.log(expenseSum);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {expensePeriod} Expenses</Text>
      <Text style={styles.text}> $ {expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 16,
    marginBottom: 25,
    marginTop: 15,
    borderColor: "red",
    borderWidth: 3,
    // justifyContent: "center",
    // alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
