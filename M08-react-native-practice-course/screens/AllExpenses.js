import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import ExpenseOutpt from "../components/ExpenseOutput/ExpenseOutpt";

const AllExpenses = ({ navigation }) => {
  return <ExpenseOutpt expensePeriod={"All"} />;
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
