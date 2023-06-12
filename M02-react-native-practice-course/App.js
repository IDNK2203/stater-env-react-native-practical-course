import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [goalsList, setGoalsList] = useState([]);

  const addGoalHandler = (goalText) => {
    setGoalsList((goals) => [
      ...goals,
      { goal: goalText, id: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoalsList((goals) => goals.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Goal Setter🎯!</Text>
      </View>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <Text style={styles.goalsHeading}> List of Goals</Text>

        <FlatList
          data={goalsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    margin: 16,
  },

  goalsContainer: {
    flex: 6,
  },
  goalsHeading: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: "auto",
    borderColor: "#ccc",
  },
});
