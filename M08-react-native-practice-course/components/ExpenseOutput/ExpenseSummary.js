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
    // marginTop: 15,
    backgroundColor: colorPallete.Tyrianpurple,
    // borderColor: "red",
    // borderWidth: 3,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  textPeriod: {
    color: colorPallete.Darkpurple2,
  },
});
