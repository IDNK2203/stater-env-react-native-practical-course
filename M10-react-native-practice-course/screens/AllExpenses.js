import { StyleSheet, View } from "react-native";
import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";
// import { useExpenseContext } from "../store/expenseContext";
import { useNavigation } from "@react-navigation/native";
import { useGetExpense } from "../hooks/expenses";
import { useRefreshOnFocus } from "../hooks/useRefreshOnFocus";
import Loader from "../components/Loader";
import ErrorOverlay from "../components/ErrorOverlay";

const AllExpenses = () => {
  const { status, data, error, isFetching, refetch } = useGetExpense();
  const navigation = useNavigation();
  useRefreshOnFocus(refetch);

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
      expenses={data}
      expensePeriod={"All"}
      fallbackText='No registered expenses found!'
    />
  );
};

export default AllExpenses;
// const styles = StyleSheet.create({
//   text: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "white",
//   },
//   container: {
//     flex: 1,
//     // backgroundColor: "#aff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
