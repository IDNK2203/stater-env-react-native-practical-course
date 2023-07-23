import { FlatList, StyleSheet, View } from "react-native";

const ExpenseList = ({ expenses }) => {
  return (
    <View>
      <FlatList />
    </View>
  );
};

export default ExpenseList;
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
