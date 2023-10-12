import { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  StyleSheet,
  Alert,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Colors } from "../../constants/colors";
import CButton from "../app-ui/CButton";

export default function ImagePicker_() {
  const [image, setImage] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const confirmCameraPermission = async () => {
    if (status.status === ImagePicker.PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      if (permissionResponse.granted) {
        return true;
      } else {
        Alert.alert(
          "Permission Not Granted",
          "This Needs Your Camera Permission to Function"
        );
        return false;
      }
    }

    if (status.status === ImagePicker.PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Not Granted",
        "This Needs Your Camera Permission to Function"
      );
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    try {
      const permissionResult = await confirmCameraPermission();
      if (!permissionResult) {
        return;
      }
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image: ", error);
    }
  };

  let imageContent = <Text style={styles.imgFallback}>No Image Choosen</Text>;

  if (image)
    imageContent = <Image source={{ uri: image }} style={styles.image} />;

  return (
    <View style={styles.box}>
      <View style={styles.imageBox}>{imageContent}</View>
      <View style={styles.btnBox}>
        <CButton color={Colors.primary500} icon={"camera"} onPress={pickImage}>
          Open Camera
        </CButton>
      </View>
      {/* <Button title='Pick an image from camera roll' /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, alignItems: "center", justifyContent: "center" },
  btnBox: {
    marginVertical: 8,
    width: "100%",
  },
  imageBox: {
    height: 175,
    width: "100%",
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imgFallback: {
    fontSize: 16,
    fontWeight: "700",
  },
});
