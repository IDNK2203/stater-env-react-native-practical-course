export default class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { latitude: location.lat, longitude: location.long }; // { lat: 0.141241, lng: 127.121 }
    this.id = id;
  }
}
