import { ScrollView, Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { useState } from "react";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import CButton from "../app-ui/CButton";

const PlaceForm = () => {
  const [titleInp, setTitleInp] = useState("");
  const [camImage, setcamImage] = useState("");
  const [userLocation, setuserLocation] = useState(null);

  const handleTitleInp = (e) => {
    console.log(titleInp);
    setTitleInp(e);
  };

  const imagePickerHandler = (data) => {
    setcamImage(data);
  };
  const userLocationHandler = (data) => {
    setuserLocation(data);
  };
  const sumbitFormHandler = () => {
    console.log(titleInp);
    console.log(camImage);
    console.log(userLocation);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTitleInp}
          value={titleInp}
        />
        <ImagePicker imagePickerHandler={imagePickerHandler} />
        <LocationPicker userLocationHandler={userLocationHandler} />
        <CButton
          color={Colors.primary500}
          icon={false}
          onPress={sumbitFormHandler}
        >
          Sumbit
        </CButton>
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
    paddingHorizontal: 16,
    fontSize: 18,
    paddingVertical: 8,
    marginVertical: 4,
    backgroundColor: Colors.primary200,
    borderBottomWidth: 2,
    width: "100%",
    borderBottomColor: Colors.primary500,
    borderRadius: 4,
  },
});
