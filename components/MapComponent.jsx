import React from "react";
import {GoogleMap, LoadScript} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 34.786591, // Replace with your latitude
  lng: -76.859055, // Replace with your longitude
};

const MapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCfylFtOpv4IwXjWl51sWOywGIjvH501z8">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components like markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
