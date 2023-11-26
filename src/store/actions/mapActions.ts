import { Dispatch } from "redux";
import { ICenter } from "../../type/type";

// Action types for map-related actions
export const mapActions = {
  SET_MAP_VIEW: "SET_MAP_VIEW", // Action type for setting MAP view
};

export const getActions = (dispatch: Dispatch<any>) => {
  return {
    updateMapView: (centerDetails: ICenter) => {
      dispatch(updateMapView(centerDetails));
    },
    setMapView: (centerDetails: ICenter) => dispatch(setMapView(centerDetails)),
  };
};

// Action creator to asynchronously set map view
const updateMapView = (centerDetails: ICenter) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(setMapView(centerDetails));
  };
};

// Action creator to synchronously set map view
const setMapView = (centerDetails: ICenter) => {
  return {
    // Action object containing the type and user details payload
    type: mapActions.SET_MAP_VIEW,
    centerDetails,
  };
};
