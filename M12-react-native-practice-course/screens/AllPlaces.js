import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import PlaceList from "../components/places/PlaceList";

const AllPlaces = ({ route }) => {
  const [placeList, setPlaceList] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setPlaceList((cur) => [...cur, route.params.place]);
    }
  }, [isFocused]);

  return <PlaceList places={placeList} />;
};

export default AllPlaces;
