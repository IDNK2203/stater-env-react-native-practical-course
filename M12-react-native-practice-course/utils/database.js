import * as SQLite from "expo-sqlite";
import Place from "../models/place";

const database = SQLite.openDatabase("places.db");

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
}

export function createPlacesInDb(place) {
  console.log(place);
  const placePromise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.latitude,
          place.location.longitude,
        ],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return placePromise;
}

export function fetchPlacesInDb(place) {
  const placesPromise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          let places = result.rows._array.map((el) => {
            return new Place(
              el.title,
              el.imageUri,
              { address: el.address, lat: el.lat, long: el.lng },
              el.id
            );
          });
          // console.log("\n", result, result.rows._array, places);
          resolve(places);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return placesPromise;
}

export function fetchPlaceByIdDB(id) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places WHERE id = ?`,
        [id],
        (_, result) => {
          const DBplace = result.rows._array[0];
          const place = new Place(
            DBplace.title,
            DBplace.imageUri,
            { address: DBplace.address, lat: DBplace.lat, long: DBplace.lng },
            DBplace.id
          );
          resolve(place);
        },
        (_, error) => {
          console.log("Testing Query Failure");
          reject(error);
        }
      );
    });
  });
  return promise;
}
