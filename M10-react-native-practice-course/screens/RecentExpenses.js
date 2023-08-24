import { useEffect, useState } from "react";
import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";
import { useExpenseContext } from "../store/expenseContext";
import { getDateMinusDays } from "../utils/date";
import { useGetExpense } from "../hooks/expenses";
import Loader from "../components/Loader";
import ErrorOverlay from "../components/ErrorOverlay";
import { useNavigation } from "@react-navigation/native";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";

const RecentExpenses = () => {
  const { status, data, error, isFetching, refetch } = useGetExpense();
  const navigation = useNavigation();
  useRefreshOnFocus(refetch);
  const recentExpenses = data?.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  if (status === "loading") {
    return <Loader />;
  }

  if (!isFetching && status === "error") {
    return (
      <ErrorOverlay
        eventHandler={() => {
          navigation.navigate("AllExpenses");
        }}
        title={error.message}
        message={"error fetching recent expenses"}
      />
    );
  }

  return (
    <ExpenseOutpt
      expenses={recentExpenses}
      fallbackText='No expenses registered for the last 7 days.'
      expensePeriod={"Last 7 Days"}
    />
  );
};

export default RecentExpenses;
