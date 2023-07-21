import { FlatList, StyleSheet, Text, View } from "react-native";
import MealCard from "../components/MealCard";
import { useFavContext } from "../store/favContext";

const Favourites = ({ navigation }) => {
  const { state: favMeals } = useFavContext();

  const createMealCard = ({ item: mealItem }) => (
    <MealCard mealItem={mealItem} />
  );

  if (favMeals.favourites.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favMeals.favourites}
      style={styles.container}
      keyExtractor={(item) => item.id}
      renderItem={createMealCard}
    />
  );
};

export default Favourites;

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
