import { Pressable, StyleSheet, Text, View } from "react-native";

const CategoryItem = ({ title, color, onPressed }) => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPressed}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.categoryText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    margin: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

    overflow: "hidden",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    padding: 8,
    flex: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
