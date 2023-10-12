import { ScrollView, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { useState } from "react";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
  const [titleInp, setTitleInp] = useState("");
  const handleTitleInp = (e) => {
    setTitleInp(e.target.value);
  };
  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChange={handleTitleInp}
          value={titleInp}
        />
        <ImagePicker />
        <LocationPicker />
      </View>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
    marginVertical: 8,
    // alignItems: "center",
    justifyContent: "center",
  },
  label: {
    marginBottom: 4,
    color: Colors.primary500,
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 4,
    fontSize: 16,
    paddingVertical: 8,
    marginVertical: 4,
    backgroundColor: Colors.primary200,
    borderBottomWidth: 2,
    width: "100%",
    borderBottomColor: Colors.primary500,
    borderRadius: 4,
  },
});
