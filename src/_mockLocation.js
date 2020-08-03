import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      atitudeAccuracy: 5,
      altitude: 5,
      longitude: -83.1515081 + increment * tenMetersWithDegrees,
      latitude: 40.0145236 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 2000);
