import { StyleSheet, Text, View, Pressable } from "react-native";

const PrimaryButton = ({ children, primary }) => {
  const onPressHanler = () => {};

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
        onPress={onPressHanler}
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
    backgroundColor: "#FFC857",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
  },
  secondaryBtn: {
    backgroundColor: "#BDD9BF",
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
