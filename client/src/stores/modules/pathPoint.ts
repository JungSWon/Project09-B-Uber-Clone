import { Location, PathPoint } from '@custom-types';

const UPDATE_START_POINT = 'pathPoint/UPDATE_START' as const;
const UPDATE_END_POINT = 'pathPoint/UPDATE_END' as const;

export const updateStartPoint = (location: Location, placeName?: string, placeId?: string) => ({
  type: UPDATE_START_POINT,
  payload: { location, startPointName: placeName, startPlaceId: placeId },
});
export const updateEndPoint = (location: Location, placeName?: string, placeId?: string) => ({
  type: UPDATE_END_POINT,
  payload: { location, endPointName: placeName, endPlaceId: placeId },
});

const initialState: PathPoint = {
  isSetStartPoint: false,
  startPoint: {
    lat: 0,
    lng: 0,
  },
  isSetEndPoint: false,
  endPoint: {
    lat: 0,
    lng: 0,
  },
};

type ActionType = ReturnType<typeof updateStartPoint> | ReturnType<typeof updateEndPoint>;

const startPoint = (state = initialState, action: ActionType): PathPoint => {
  switch (action.type) {
    case UPDATE_START_POINT:
      return {
        ...state,
        isSetStartPoint: true,
        startPoint: { ...action.payload.location },
        startPointName: action.payload.startPointName,
        startPlaceId: action.payload.startPlaceId,
      };
    case UPDATE_END_POINT:
      return {
        ...state,
        isSetEndPoint: true,
        endPoint: { ...action.payload.location },
        endPointName: action.payload.endPointName,
        endPlaceId: action.payload.endPlaceId,
      };
    default:
      return state;
  }
};

export default startPoint;
