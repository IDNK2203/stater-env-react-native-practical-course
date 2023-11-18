import { MAPBOX_ACCESS_TOKEN } from "@env";

export default async function getReadableAddress(lat, long) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${MAPBOX_ACCESS_TOKEN}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Error: could not fetch address");
  }

  const data = await res.json();
  const address = data.features[0].place_name;
  return {
    lat,
    long,
    address,
  };
}
