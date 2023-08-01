import { StyleSheet, Text, View, TextInput } from "react-native";

const Input = ({ inputConfig, label }) => {
  return (
    <View>
      <Text>Label:{label}</Text>
      <TextInput {...inputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
