import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors, { colorPallete } from "../utils/colors";

const Button = ({ children, mode, style, onPresshandler }) => {
  return (
    <View style={[styles.btnOuter]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.btnPressed, styles.pressed] : [styles.btnPressed]
        }
        android_ripple={{ color: colorPallete.Tyrianpurple2 }}
        onPress={onPresshandler}
      >
        <View style={[styles.btnInner, mode === "flat" && styles.flatBtnInner]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnOuter: {
    margin: 8,
    backgroundColor: "transparent",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
  },
  flatBtnInner: {
    backgroundColor: colorPallete.Claret,
  },
  flatText: {
    color: colorPallete.Darkpurple2,
    color: "black",
  },
  btnInner: {
    padding: 8,
    width: 125,
    backgroundColor: colorPallete.accent500,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
});
