import { StyleSheet, Text, View } from "react-native";
import { colorPallete } from "../../utils/colors";

const ExpenseSummary = ({ expenses, expensePeriod }) => {
  const expenseSum = expenses.reduce((sum, item) => sum + item.amount, 0);
  console.log(expenseSum);
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {expensePeriod}</Text>
      <Text style={[styles.text, styles.textPeriod]}>
        {" "}
        $ {expenseSum.toFixed(2)}
      </Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 8,
    padding: 16,
    marginBottom: 25,
    backgroundColor: colorPallete.Darkpurple2,
    justifyContent: "space-between",
    elevation: 3,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  textPeriod: {
    color: colorPallete.accent500,
    fontSize: 18,
  },
});
