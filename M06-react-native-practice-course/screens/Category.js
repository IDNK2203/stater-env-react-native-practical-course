import { FlatList, StyleSheet, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryItem from "../components/CategoryItem";

const RenderCategoryItem = ({ item }) => (
  <CategoryItem title={item.title} color={item.color} />
);

const Category = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        style={styles.flex}
        keyExtractor={(item) => item.id}
        renderItem={RenderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    // backgroundColor: "#aff",
  },
});
