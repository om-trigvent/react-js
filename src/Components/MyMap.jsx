import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.712775,
  lng: -74.005973,
};

export default function MyMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        {/* Other map components, like markers, can go here */}
      </GoogleMap>
    </LoadScript>
  );
}
