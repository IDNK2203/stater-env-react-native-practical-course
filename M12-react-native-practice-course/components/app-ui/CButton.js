import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/colors";

const CButton = ({ color, icon, onPress, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.btnBox, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={24} color={color} />
      <Text style={{ ...styles.btnText, color: color }}>{children}</Text>
    </Pressable>
  );
};

export default CButton;

const styles = StyleSheet.create({
  btnBox: {
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: Colors.primary200,
  },
  pressed: {
    opacity: 0.7,
  },
  btnText: {
    paddingLeft: 8,
    fontSize: 16,
    fontWeight: 400,
    textTransform: "capitalize",
  },
});
