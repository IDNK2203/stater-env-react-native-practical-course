import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import Colors from "../utils/colors";
import PrimaryButton from "../components/Button";
import { useFavContext } from "../store/favContext";

const Meal = ({ navigation }) => {
  const mealId = useRoute().params.mealId;
  const meal = MEALS.find((item) => item.id === mealId);
  const { state, dispatch } = useFavContext();

  const truncate = (str, max, len) => {
    return str.length > max ? str.substring(0, len) + "..." : str;
  };

  const headerButtonHandler = () => {
    dispatch({ type: "TOGGLE_MODE", payload: meal });
    console.log(state);
    // Alert.alert("Hurray", "This meal has been added to your Favourite 🍴", [
    //   { text: "Cancel", style: "cancel" },
    // ]);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: truncate(meal.title, 20, 19),
      headerRight: () => (
        <PrimaryButton
          primary
          mealId={meal.id}
          onPresshandler={headerButtonHandler}
        />
      ),
    });
  }, [navigation, meal.title]);

  return (
    <ScrollView style={styles.flex}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={{ uri: meal.imageUrl }} />
        </View>
        <Text style={styles.title}>{meal.title}</Text>

        <View style={styles.detailsContainer}>
          <Text style={styles.mealDetail}>{meal.duration}m</Text>
          <Text style={styles.mealDetail}>
            {meal.affordability.toUpperCase()}
          </Text>
          <Text style={styles.mealDetail}>{meal.complexity.toUpperCase()}</Text>
        </View>
        <View style={styles.listItemContainer}>
          <View style={styles.whiteBorder}>
            <Text style={styles.subTitle}> Ingredients</Text>
          </View>
          {meal.ingredients.map((item) => (
            <Text key={item} style={styles.listItem}>
              {item}
            </Text>
          ))}
        </View>
        <View style={styles.listItemContainer}>
          <View style={styles.whiteBorder}>
            <Text style={styles.subTitle}>Preparation Steps</Text>
          </View>

          {meal.steps.map((item) => (
            <Text key={item} style={styles.listItem}>
              {item}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Meal;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 15,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: 700,
    textAlign: "center",
    margin: 12.5,
  },

  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 0,
    margin: 12,
  },

  mealDetail: {
    // textTransform: "uppercase",
    color: "white",
    fontWeight: 300,
    fontSize: 16,
  },
  subTitle: {
    fontSize: 20,
    color: Colors.accent400,
    fontWeight: 700,
    textAlign: "center",
    margin: 5,
  },
  whiteBorder: {
    borderColor: Colors.accent400,
    borderBottomWidth: 3,
    width: "100%",
  },

  listItemContainer: {
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 10,
    alignItems: "center",
  },
  listItem: {
    padding: 12,
    fontWeight: 600,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent400,
    textAlign: "left",
    width: "100%",
    color: Colors.bg,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
});
