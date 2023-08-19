import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { colorPallete } from "../utils/colors";
import Button from "./Button";

const ErrorOverlay = ({ title, message, eventHandler }) => {
  return (
    <View style={styles.ErrorOverlayBox}>
      <View style={styles.textBox}>
        <Text style={styles.errTitle}>{title}</Text>
        <Text style={styles.errMessage}>{message}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button mode={"flat"} onPresshandler={eventHandler}>
          Okay
        </Button>
      </View>
    </View>
  );
};

export default ErrorOverlay;

const styles = StyleSheet.create({
  ErrorOverlayBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    marginVertical: 26,
  },
  errTitle: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: colorPallete.Claret,
  },
  errMessage: {
    color: "white",
    textAlign: "center",
    textTransform: "capitalize",
    color: colorPallete.accent500,
    fontWeight: "700",
    marginVertical: 2,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
    // height: 100,
  },
});
