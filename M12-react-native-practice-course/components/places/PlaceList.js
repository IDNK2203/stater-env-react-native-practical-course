import { Text } from "react-native";
import { FlatList, StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceList = ({ places }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackBox}>
        <Text style={styles.fallbackText}>You have no Places</Text>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={places}
      renderItem={({ item }) => <PlaceItem item={item} />}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  fallbackBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
