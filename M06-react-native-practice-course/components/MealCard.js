import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

const MealCard = ({ mealItem }) => {
  console.log(mealItem);
  return (
    <View style={styles.conatainer}>
      <Text>{mealItem.title}</Text>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  conatainer: {
    // backgroundColor: Colors.primary,
    // backgroundColor: Platform.OS === "android" ? "orange" : "grey",
    // backgroundColor: Platform.select({ ios: "orange", android: "grey" }),
    backgroundColor: "grey",
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    alignItems: "center",
  },
});
