import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import CButton from "../components/app-ui/CButton";
import { Colors } from "../constants/colors";
import { fetchPlaceByIdDB } from "../utils/database";

export default function PlaceDetail({ route, navigation }) {
  const [fetchedPlace, setFetchedPlace] = useState(null);
  const { placeId } = route.params;
  useEffect(() => {
    async function fetchPlaceDetail() {
      const place = await fetchPlaceByIdDB(placeId);
      setFetchedPlace(place);
      navigation.setOptions({ title: place.title });
    }
    fetchPlaceDetail();
  }, [placeId]);

  function showOnMapHandler() {
    navigation.navigate("Map", {
      location: {
        lat: fetchedPlace.location.latitude,
        long: fetchedPlace.location.longitude,
      },
    });
  }

  if (!fetchedPlace) {
    return (
      <View style={styles.fallback}>
        <Text style={styles.fbText}>Loading Place ...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <CButton icon={"map"} onPress={showOnMapHandler}>
          Open Map
        </CButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fbText: {
    fontSize: 20,
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
