import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ item, deleteGoalHandler }) {
  const { goal, id } = item;
  //   const deleteGoalHandlerWrapper = () => {
  //     deleteGoalHandler(id);
  //   };

  return (
    <View style={styles.goalListItem}>
      <Pressable
        android_ripple={{ color: "#75ff43" }}
        onPress={deleteGoalHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalListItem: {
    backgroundColor: "#00b51b",
    borderRadius: 4,
    margin: 8,
  },
  goalText: {
    padding: 12,
    color: "white",
  },
  pressed: {
    opacity: 0.6,
  },
});
