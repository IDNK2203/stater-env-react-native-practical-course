import { StyleSheet, Text, View } from "react-native";

const Meal = () => {
  return (
    <View style={styles.container}>
      <Text>Meal</Text>
    </View>
  );
};

export default Meal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
