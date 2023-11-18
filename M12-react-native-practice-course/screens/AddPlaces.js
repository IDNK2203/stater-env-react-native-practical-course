import PlaceForm from "../components/places/PlaceForm";

const AddPlaces = ({ navigation }) => {
  function createPlace(place) {
    navigation.navigate("AllPlaces", { place });
  }
  return <PlaceForm createPlace={createPlace} />;
};

export default AddPlaces;
