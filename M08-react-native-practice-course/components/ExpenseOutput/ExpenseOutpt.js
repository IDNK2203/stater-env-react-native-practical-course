import { StyleSheet, View } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-07-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e3",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 14.99,
    date: new Date("2022-02-19"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 18.59,
    date: new Date("2023-07-22"),
  },

  {
    id: "e6",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2022-01-05"),
  },
  {
    id: "e7",
    description: "Some Carrots",
    amount: 55.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e8",
    description: "A boat",
    amount: 40.35,
    date: new Date("2022-02-19"),
  },
  {
    id: "e9",
    description: "Another slipper",
    amount: 8.59,
    date: new Date("2023-07-22"),
  },
];

const ExpenseOutpt = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={DUMMY_EXPENSES} expensePeriod={expensePeriod} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
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
