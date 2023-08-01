import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";
import { useExpenseContext } from "../store/expenseContext";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const { state } = useExpenseContext();
  const recentExpenses = state.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpenseOutpt
      expenses={recentExpenses}
      fallbackText='No expenses registered for the last 7 days.'
      expensePeriod={"Last 7 Days"}
    />
  );
};

export default RecentExpenses;
