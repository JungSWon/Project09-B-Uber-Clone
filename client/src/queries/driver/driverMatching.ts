import { gql } from '@apollo/client';

export const USER_ON_BOARD = gql`
  mutation userOnBoard($uid: String) {
    userOnBoard(uid: $uid) {
      success
      message
    }
  }
`;

export const UPDATE_DRIVER_LOCATION = gql`
  mutation updateDriverLocation($location: LatLngInput, $uid: String) {
    updateDriverLocation(location: $location, uid: $uid) {
      success
      message
    }
  }
`;
