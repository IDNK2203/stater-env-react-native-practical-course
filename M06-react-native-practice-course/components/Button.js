import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../utils/colors";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const PrimaryButton = ({ primary, onPresshandler, disabled }) => {
  const [fav, setfav] = useState(false);

  const onp = () => {
    setfav((e) => !e);
  };

  useEffect(() => {
    if (fav) {
      onPresshandler();
    }
  }, [fav]);
  return (
    <View
      style={[styles.outerBtnContainer, primary ? null : styles.secondaryBtn]}
    >
      <Pressable
        disabled={disabled}
        style={({ pressed }) =>
          pressed
            ? [styles.innerBtnContainer, pressed]
            : [styles.innerBtnContainer]
        }
        android_ripple={{ color: "#e2e2e2" }}
        onPress={onp}
      >
        <Ionicons
          name={fav ? "star" : "star-outline"}
          size={24}
          color={Colors.secondary500}
        />
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerBtnContainer: {
    margin: 8,
    backgroundColor: "transparent",
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
