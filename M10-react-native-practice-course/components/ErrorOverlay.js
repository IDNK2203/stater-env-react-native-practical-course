import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { colorPallete } from "../utils/colors";
import Button from "./Button";

const ErrorOverlay = (Title, message, eventHandler) => {
  return (
    <View style={styles.ErrorOverlayBox}>
      <View style={styles.textBox}>
        <Text style={styles.errTitle}>{Title}</Text>
        <Text style={styles.errMessage}>{message}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button onPresshandler={eventHandler}>Okay</Button>
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
    marginVertical: 4,
  },
  errTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  errMessage: {
    color: "white",
    textAlign: "center",
    marginBottom: 4,
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    height: 175,
  },
});
