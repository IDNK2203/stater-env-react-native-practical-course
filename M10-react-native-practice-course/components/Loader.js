import { StyleSheet, View, ActivityIndicator } from "react-native";
import { colorPallete } from "../utils/colors";

const Loader = () => {
  return (
    <View style={styles.loaderBox}>
      <ActivityIndicator size={"small"} color={colorPallete.accent500} />
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
