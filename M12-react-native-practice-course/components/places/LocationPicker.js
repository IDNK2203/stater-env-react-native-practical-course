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

export default function LocationPicker() {
  const [map, setMap] = useState(null);

  let imageContent = (
    <Text style={styles.imgFallback}>Select your location</Text>
  );

  // if (map)
  //   imageContent = <Image source={{ uri: image }} style={styles.image} />;

  return (
    <View style={styles.box}>
      <View style={styles.imageBox}>{imageContent}</View>
      <View style={styles.btnBox}>
        <View style={styles.btnBoxItem}>
          <CButton color={Colors.primary500} icon={"map"} onPress={() => {}}>
            open map
          </CButton>
        </View>
        <View style={styles.btnBoxItem}>
          <CButton
            color={Colors.primary500}
            icon={"location"}
            onPress={() => {}}
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
