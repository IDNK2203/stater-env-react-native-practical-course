import { MAPBOX_ACCESS_TOKEN } from "@env";

export default function getLocationImage({ lat, long }) {
  return `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/pin-l+ff0000(${long},${lat})/${long},${lat},10,0/300x200@2x?access_token=${MAPBOX_ACCESS_TOKEN}`;
}
