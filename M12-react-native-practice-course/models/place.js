class Place {
  constructor(location, imageUri, title, address) {
    this.address = address;
    this.title = title;
    this.imageUri = imageUri;
    this.location = location; //{lat:78.90889,long:73.98872}
    this.id = new Date().toString() + Math.random().toString();
  }
}
