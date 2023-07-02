import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import Colors from "../utils/colors";

const Card = ({ children, style = {} }) => {
  return <View style={[styles.conatainer, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  conatainer: {
    // backgroundColor: Colors.primary,
    // backgroundColor: Platform.OS === "android" ? "orange" : "grey",
    backgroundColor: "orange",
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
