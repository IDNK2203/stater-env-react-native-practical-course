import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";

const AllExpenses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the All Expenses Screen</Text>
    </View>
  );
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
