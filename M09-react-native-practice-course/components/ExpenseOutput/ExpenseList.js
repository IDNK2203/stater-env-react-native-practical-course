import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "./ExpressItem";

const RenderExpenseItem = ({ item }) => {
  return <ExpenseItem {...item} />;
};
const ExpenseList = ({ expenses }) => {
  return (
    <View>
      <FlatList
        data={expenses}
        style={styles.listContainer}
        renderItem={RenderExpenseItem}
        key={(item) => item.id}
      />
    </View>
  );
};

export default ExpenseList;
const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 36,
  },
});
