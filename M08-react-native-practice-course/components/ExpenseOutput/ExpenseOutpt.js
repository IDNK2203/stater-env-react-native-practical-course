import { StyleSheet, View } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const ExpenseOutpt = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} expensePeriod={expensePeriod} />
      <ExpenseList expenses={expenses} />
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
