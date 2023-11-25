import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import IconButton from "../components/app-ui/IconButton";

const Map = ({ navigation, route }) => {
  console.log(route.params);
  const initLoaction = route.params?.location;
  let [selectedLocation, setSelectedLocation] = useState(
    initLoaction && {
      latitude: initLoaction?.lat,
      longitude: initLoaction?.long,
    }
  );
  const intiRegion = initLoaction
    ? {
        latitude: initLoaction.lat,
        longitude: initLoaction.long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    : {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

  const mapViewHandler = (e) => {
    if (initLoaction) return;
    let { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  const saveLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("Error Saving", "Pick a location");
      return;
    }
    navigation.navigate("AddPlaces", selectedLocation);
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    if (initLoaction) return;
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          color={tintColor}
          type={"save"}
          size={24}
          onPress={saveLocation}
        />
      ),
    });
  }, [navigation, selectedLocation]);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={intiRegion}
        style={styles.map}
        onPress={mapViewHandler}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} title='The Location' />
        )}
      </MapView>
    </View>
  );
};

export default Map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
