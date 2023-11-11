import MapView, { Marker } from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";
import { useCallback, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../components/app-ui/IconButton";

const Map = () => {
  let [selectedLocation, setSelectedLocation] = useState(null);
  const navigation = useNavigation();

  const mapViewHandler = (e) => {
    let { latitude, longitude } = e.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  const saveLocation = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("Error Saving", "Pick a location");
      return;
    }
    navigation.navigate("AddPlaces", { selectedLocation });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
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
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
        onPress={mapViewHandler}
      >
        {selectedLocation && (
          <Marker
            draggable
            onDragEnd={mapViewHandler}
            coordinate={selectedLocation}
            title='The Location'
          />
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
