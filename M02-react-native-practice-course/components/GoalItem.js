import { StyleSheet, Text, View } from "react-native";
export default function GoalItem({ item }) {
  return (
    <View style={styles.goalListItem}>
      <Text style={styles.goalText}>{item.goal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalListItem: {
    backgroundColor: "#fccdd3",
    borderRadius: 4,
    padding: 12,
    margin: 8,
  },
  goalText: {
    color: "white",
  },
});
