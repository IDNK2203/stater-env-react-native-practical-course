import { FlatList, StyleSheet, Text, View } from "react-native";

const RecentExpenses = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!2</Text>
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
  },

  rootContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 25,
    marginTop: 15,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
