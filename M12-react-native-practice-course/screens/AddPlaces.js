import PlaceForm from "../components/places/PlaceForm";
import { createPlacesInDb } from "../utils/database";

const AddPlaces = ({ navigation }) => {
  async function createPlace(place) {
    await createPlacesInDb(place);
    navigation.navigate("AllPlaces");
  }

  return <PlaceForm createPlace={createPlace} />;
};

export default AddPlaces;
