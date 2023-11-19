import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlaceList from "../components/places/PlaceList";
import { fetchPlacesInDb } from "../utils/database";

const AllPlaces = ({ route }) => {
  const [placeList, setPlaceList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async function () {
      const pl = await fetchPlacesInDb();
      if (isFocused) {
        setPlaceList(pl);
      }
    })();
  }, [isFocused]);

  return <PlaceList places={placeList} />;
};

export default AllPlaces;
