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
import { Colors } from "../../constants/colors";
import CButton from "../app-ui/CButton";
import * as Location from "expo-location";
import getLocationImage from "../../utils/LocationImage";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function LocationPicker({ userLocationHandler }) {
  const navigate = useNavigation();
  const router = useRoute();
  const [userLocation, setUserLocation] = useState(null);
  const [status, requestPermission] = Location.useForegroundPermissions();

  // console.log(router.params);

  useEffect(() => {
    if (router.params) {
      setUserLocation({
        lat: router.params.latitude,
        long: router.params.longitude,
      });
      userLocationHandler({
        lat: router.params.latitude,
        long: router.params.longitude,
      });
    }
  }, [router.params]);

  const confirmLocationPermission = async () => {
    if (status.status === Location.PermissionStatus.UNDETERMINED) {
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

    if (status.status === Location.PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Not Granted",
        "This Needs Your Camera Permission to Function"
      );
      return false;
    }
    return true;
  };

  const getuserLocation = async () => {
    try {
      const permissionResult = await confirmLocationPermission();
      if (!permissionResult) {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });
      userLocationHandler({
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });

      // console.log(location);
    } catch (error) {
      console.log(error);
    }
  };

  const displayMap = () => {
    navigate.navigate("Map");
  };

  let imageContent = (
    <Text style={styles.imgFallback}>Select your location</Text>
  );
  if (userLocation) {
    // console.log(getLocationImage(userLocation));
    imageContent = (
      <Image
        source={{ uri: getLocationImage(userLocation) }}
        style={styles.image}
      />
    );
  }

  return (
    <View style={styles.box}>
      <View style={styles.imageBox}>{imageContent}</View>
      <View style={styles.btnBox}>
        <View style={styles.btnBoxItem}>
          <CButton color={Colors.primary500} icon={"map"} onPress={displayMap}>
            open map
          </CButton>
        </View>
        <View style={styles.btnBoxItem}>
          <CButton
            color={Colors.primary500}
            icon={"location"}
            onPress={getuserLocation}
          >
            locate user
          </CButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { flex: 1, alignItems: "center", justifyContent: "center" },
  btnBox: {
    flexDirection: "row",
    marginVertical: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnBoxItem: {
    // flex: 1,
    flexBasis: "48%",
    // marginHorizontal: 2,
  },
  imageBox: {
    height: 175,
    width: "100%",
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    overflow: "hidden",
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
