import { StyleSheet, View, ActivityIndicator } from "react-native";

const Loader = () => {
  return (
    <View style={styles.loaderBox}>
      <ActivityIndicator size={"small"} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
