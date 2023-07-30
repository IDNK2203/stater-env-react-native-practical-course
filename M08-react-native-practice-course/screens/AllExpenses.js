import { StyleSheet, View } from "react-native";
import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";
import { useExpenseContext } from "../store/expenseContext";

const AllExpenses = () => {
  const { state } = useExpenseContext();

  return <ExpenseOutpt expenses={state.expenses} expensePeriod={"All"} />;
};

export default AllExpenses;
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    // backgroundColor: "#aff",
    alignItems: "center",
    justifyContent: "center",
  },
});
