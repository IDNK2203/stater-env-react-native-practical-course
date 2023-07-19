import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";
import { useLayoutEffect } from "react";
import { useFavContext } from "../store/favContext";

const Favourites = ({ navigation }) => {
  const { state: favMeals } = useFavContext();

  // const catMeals = MEALS.filter((item) => item.categoryIds.includes(catId));

  const createMealCard = ({ item: mealItem }) => (
    <MealCard mealItem={mealItem} />
  );
  // const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: categoryTitle,
  //   });
  // }, [navigation, categoryTitle]);

  return (
    <FlatList
      data={favMeals}
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
});
