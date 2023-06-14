import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, deleteGoalHandler }) {
  const { goal, id } = item;
  return (
    <View style={styles.goalListItem}>
      <Pressable
        android_ripple={{ color: "#9ea3a8" }}
        onPress={deleteGoalHandler.bind(this, id)} //The bind method in action 😎
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalListItem: {
    backgroundColor: "#252627",
    borderRadius: 4,
    marginVertical: 8,
  },
  goalText: {
    padding: 12,
    color: "white",
  },
  pressed: {
    opacity: 0.6,
  },
});
