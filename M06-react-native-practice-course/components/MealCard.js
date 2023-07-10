import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

const MealCard = ({ mealItem }) => {
  const navigator = useNavigation();
  const onPressed = () => {
    navigator.navigate("Meal", { mealId: mealItem.id });
  };

  return (
    <View style={styles.conatainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? [styles.buttonPressed] : null)}
        onPress={onPressed}
      >
        <View style={styles.innerContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              resizeMode='cover'
              source={{ uri: mealItem.imageUrl }}
            />
          </View>
          <View style={styles.descContainer}>
            <Text style={styles.mealTitle}>{mealItem.title}</Text>
            <View>
              <Text style={styles.mealItemDetails}>
                {" "}
                Duration: {mealItem.duration}mins
              </Text>
              <Text style={styles.mealItemDetails}>
                {" "}
                Complexity: {mealItem.complexity}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  conatainer: {
    marginVertical: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    elevation: 4,
    shadowRadius: 6,
    borderRadius: 8,
    backgroundColor: "#fff",
    height: 150,
    borderColor: Colors.accent600,
    borderWidth: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    overflow: "hidden",
    // borderRadius: 8,
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  imgContainer: {
    flex: 1,
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  descContainer: {
    padding: 8,
    paddingVertical: 20,
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mealItemDetails: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.bg,
  },
});
