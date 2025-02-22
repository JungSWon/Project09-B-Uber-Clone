import React, { useEffect, useState } from 'react';
import Map from '@components/map/Map';
import Loading from '@components/common/Loading';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { updateLocation } from '@stores/modules/location';
import getLocation from '@utils/getLocation';
import { Location, PathPoint } from '@custom-types';
import { Toast } from 'antd-mobile';
import styled from 'styled-components';

interface Props {
  isMatched?: boolean;
  taxiLocation?: Location;
}

const MapContainer: React.FC<Props> = ({ isMatched = false, taxiLocation = { lat: 0, lng: 0 } }) => {
  const location = useSelector((state: { location: Location }) => state.location, shallowEqual);
  const pathPoint = useSelector((state: { pathPoint: PathPoint }) => state.pathPoint);
  const dispatch = useDispatch();
  const [center, setCenter] = useState(location);
  const [isGPSLoaded, setGPSLoaded] = useState(false);

  useEffect(() => {
    initializeLocation();
    const gpsInterval = setInterval(updateMyLocation, 1000);
    return () => clearInterval(gpsInterval);
  }, []);

  const initializeLocation = async () => {
    const startLocation: Location = await getLocation();
    dispatch(updateLocation(startLocation));
    if (!pathPoint.isSetStartPoint) {
      setCenter(startLocation);
    }
    setGPSLoaded(true);
  };

  const updateMyLocation = async () => {
    try {
      const myLocation: Location = await getLocation();
      dispatch(updateLocation(myLocation));
    } catch (error) {
      console.error(error);
      Toast.show('GPS 사용이 불가능합니다.', Toast.SHORT);
    }
  };

  return (
    <>
      {isGPSLoaded ? (
        <Map
          center={center}
          location={location}
          pathPoint={pathPoint}
          isMatched={isMatched}
          taxiLocation={taxiLocation}
        />
      ) : (
        <CenterDIV>
          <Loading />
        </CenterDIV>
      )}
    </>
  );
};

const CenterDIV = styled.div`
  display: flex;
  justify-content: center;
`;

export default MapContainer;
