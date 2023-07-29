import { StyleSheet, View } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { useExpenseContext } from "../../store/expenseContext";

const ExpenseOutpt = ({ expenses, expensePeriod }) => {
  const { state } = useExpenseContext();

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={state.expenses} expensePeriod={expensePeriod} />
      <ExpenseList expenses={state.expenses} />
    </View>
  );
};

export default ExpenseOutpt;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 25,
    marginTop: 15,
    // // backgroundColor: "#aff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
