import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";
import { useExpenseContext } from "../store/expenseContext";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const { state: expenses } = useExpenseContext();
  const recentExpenses = expenses.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  console.log(expenses, "/n", recentExpenses);
  return (
    <ExpenseOutpt expenses={recentExpenses} expensePeriod={"Last 7 Days"} />
  );
};

export default RecentExpenses;
