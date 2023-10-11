import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const IconButton = ({ color, type, size, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.iconBox, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={type} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconBox: {
    padding: 2,
    margin: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
