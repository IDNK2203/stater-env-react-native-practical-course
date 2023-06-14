import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalSwitch, setModalSwitch] = useState(false);

  const toggleModalSwitch = () => {
    setModalSwitch((state) => !state);
  };

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
    <>
      <StatusBar style='dark' />
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Goal Setter🎯!</Text>
        </View>
        <View style={styles.btn}>
          <Button
            onPress={toggleModalSwitch}
            color='#904E55'
            title='Add Goal'
          />
        </View>

        <GoalInput
          addGoalHandler={addGoalHandler}
          modalSwitch={modalSwitch}
          toggleModalSwitch={toggleModalSwitch}
        />

        <View style={styles.goalsContainer}>
          {goalsList.length !== 0 && (
            <Text style={styles.goalsHeading}> List of Goals</Text>
          )}

          <FlatList
            data={goalsList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
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
    marginTop: 24,
  },

  goalsContainer: {
    flex: 6,
  },
  goalsHeading: {
    textAlign: "center",
    fontSize: 20,
    color: "rgb(125, 118, 94)",
    fontWeight: 700,
    marginVertical: 24,
    paddingTop: 20,
    marginBottom: 8,
    textTransform: "uppercase",
    marginHorizontal: "auto",
    borderColor: "#ccc",
  },
  btn: {},
});
