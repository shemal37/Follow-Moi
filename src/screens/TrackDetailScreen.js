import React, { useContext } from "react";
import { Text, StyleSheet } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((t) => t._id === _id);
  const intialCoords = track.locations[0].coords;
  return (
    <>
      <Text>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          longitude: intialCoords.longitude,
          latitude: intialCoords.latitude,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    marginTop: 20,
    height: 400,
  },
});

export default TrackDetailScreen;
