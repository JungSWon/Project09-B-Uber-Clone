import React, { useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { Location } from '../types';


const Map: React.FC<{
  center: Location;
  location: Location;
  zoom: number;
  updateMyLocation: () => void;
  moveCenterMyLocation: () => void;
}> = ({ center, location, zoom, updateMyLocation, moveCenterMyLocation }) => {
  useEffect(() => {
    setInterval(updateMyLocation, 1000);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultZoom={zoom}
        center={center}
        onTilesLoaded={() => {
          updateMyLocation();
          moveCenterMyLocation();
        }}
      >
        <div>
          {center.lat}, {center.lng}
        </div>
        <Marker lat={location.lat} lng={location.lng} color="#95A5A6" />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 37.5006226,
    lng: 127.0231786,
  },
  zoom: 16,
};

export default Map;
