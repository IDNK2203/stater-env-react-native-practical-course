import { FlatList, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealCard from "../components/MealCard";

const Category = () => {
  const catId = useRoute().params.categoryId;

  const catMeals = MEALS.filter((item) => item.categoryIds.includes(catId));

  const createMealCard = ({ item: mealItem }) => (
    <MealCard mealItem={mealItem} />
  );

  return (
    <FlatList
      data={catMeals}
      style={styles.container}
      keyExtractor={(item) => item.id}
      renderItem={createMealCard}
    />
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
