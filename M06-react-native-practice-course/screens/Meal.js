import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const Meal = ({ navigation }) => {
  const mealId = useRoute().params.mealId;
  const meal = MEALS.find((item) => item.id === mealId);

  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: truncate(meal.title, 20, 19),
    });
  }, [navigation]);

  return (
    <View class={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: meal.imageUrl }} />
      </View>
      <Text>{meal.title}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.mealDetail}>Duration: {meal.duration}</Text>
        <Text style={styles.mealDetail}>
          Affordability: {meal.affordability}
        </Text>
        <Text style={styles.mealDetail}>Complexity: {meal.complexity}</Text>
      </View>
      <View style={styles.listItemContainer}>
        {meal.ingredients.map((item) => (
          <Text style={styles.listItem}>{item}</Text>
        ))}
      </View>
      <View style={styles.listItemContainer}>
        {meal.steps.map((item) => (
          <Text style={styles.listItem}>{item}</Text>
        ))}
      </View>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {},

  title: {},

  detailsContainer: {},

  mealDetail: {},

  listItemContainer: {},

  listItem: {},
});
