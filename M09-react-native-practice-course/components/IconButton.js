import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors, { colorPallete } from "../utils/colors";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ iconTitle, color, size, onPresshandler, disabled }) => {
  return (
    <View style={styles.outerBtnContainer}>
      <Pressable
        disabled={disabled}
        style={({ pressed }) =>
          pressed
            ? [styles.innerBtnContainer, styles.pressed]
            : [styles.innerBtnContainer]
        }
        android_ripple={{ color: colorPallete.Tyrianpurple2 }}
        onPress={onPresshandler}
      >
        <Ionicons name={iconTitle} size={size} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  outerBtnContainer: {
    margin: 8,
    backgroundColor: "transparent",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
  },
  innerBtnContainer: {
    padding: 8,
  },
  pressed: {
    opacity: 0.75,
  },
});
