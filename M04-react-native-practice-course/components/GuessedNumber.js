import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../utils/colors";

const GuessedNumber = ({ children }) => {
  return (
    <View style={styles.conatainer}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default GuessedNumber;

const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: Colors.secondary500,
    width: "60%",
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
  text: {
    textAlign: "center",
    fontSize: 28,
    margin: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
});
