import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../utils/colors";

const PrimaryButton = ({ children, primary, onPresshandler }) => {
  return (
    <View
      style={[styles.outerBtnContainer, primary ? null : styles.secondaryBtn]}
    >
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerBtnContainer, pressed]
            : [styles.innerBtnContainer]
        }
        android_ripple={{ color: "#e2e2e2" }}
        onPress={onPresshandler}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerBtnContainer: {
    margin: 8,
    backgroundColor: Colors.secondary500,
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
  },
  secondaryBtn: {
    backgroundColor: Colors.accent400,
  },
  innerBtnContainer: {
    padding: 16,
  },
  btnText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1.25,
  },
  pressed: {
    opacity: 0.75,
  },
});
