import { useEffect, useState } from "react";
import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";
import { useExpenseContext } from "../store/expenseContext";
import { getDateMinusDays } from "../utils/date";
import { useGetExpense } from "../hooks/expenses";
import Loader from "../components/Loader";
import ErrorOverlay from "../components/ErrorOverlay";

const RecentExpenses = () => {
  const { state, dispatch } = useExpenseContext();
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(null);

  const recentExpenses = state.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  useEffect(() => {
    async function fetchExpense() {
      try {
        setIsFetching(true);
        const expenses = await useGetExpense();
        console.log("why", expenses);
        dispatch({ type: "SET_EXPENSES", payload: expenses });
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        // setIsError(error.message);
      } finally {
        // setIsFetching(false);
      }
    }
    fetchExpense();
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  // if (!isFetching && isError) {
  //   return (
  //     <ErrorOverlay
  //       eventHandler={() => {}}
  //       title={isError.message}
  //       message={"error fetching recent expenses"}
  //     />
  //   );
  // }

  return (
    <ExpenseOutpt
      expenses={recentExpenses}
      fallbackText='No expenses registered for the last 7 days.'
      expensePeriod={"Last 7 Days"}
    />
  );
};

export default RecentExpenses;
