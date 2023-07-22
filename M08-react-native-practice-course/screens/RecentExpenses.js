import { FlatList, StyleSheet, Text, View } from "react-native";

const RecentExpenses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Recent Expenses Screen</Text>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 25,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  rootContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 25,
    marginTop: 15,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
