import { FlatList, StyleSheet, Text, View } from "react-native";

const ManageExpense = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Manage Expense Screen</Text>
    </View>
  );
};

export default ManageExpense;

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
