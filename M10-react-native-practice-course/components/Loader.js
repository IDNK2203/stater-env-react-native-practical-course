import { StyleSheet, View, ActivityIndicator } from "react-native";
import { colorPallete } from "../utils/colors";

const Loader = ({ fullScreen = true }) => {
  return (
    <View
      style={[
        styles.loaderBox,
        fullScreen ? styles.fullScreen : styles.fixedPostion,
      ]}
    >
      <ActivityIndicator size={"small"} color={colorPallete.accent500} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  fixedPostion: {
    position: "absolute",
    top: 2,
    left: 20,
  },
  loaderBox: {
    justifyContent: "center",
    alignItems: "center",
  },
});
