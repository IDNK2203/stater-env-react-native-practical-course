import { FlatList, StyleSheet, Text, View } from "react-native";

const RenderExpenseItem = ({ item }) => {
  return <Text> {item.description}</Text>;
};
const ExpenseList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        renderItem={RenderExpenseItem}
        key={(item) => item.id}
      />
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
