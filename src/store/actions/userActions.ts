import { IUser } from "../../type/type";
import { Dispatch } from "redux";

// Action types for user-related actions
export const userActions = {
  SET_USER_DETAILS: "SET_USER_DETAILS", // Action type for setting user details
};

// Function to get action creators
export const getActions = (dispatch: Dispatch<any>) => {
  return {
    // Action creator to add user details
    addUser: (userDetails: IUser) => dispatch(addUser(userDetails)),
    // Action creator to set user details
    setUserDetails: (userDetails: IUser) =>
      dispatch(setUserDetails(userDetails)),
  };
};

// Action creator to asynchronously add user details
const addUser = (userDetails: IUser) => {
  return async (dispatch: Dispatch<any>) => {
    // Dispatches an action to set user details
    dispatch(setUserDetails(userDetails));
  };
};

// Action creator to synchronously set user details
const setUserDetails = (userDetails: IUser) => {
  return {
    // Action object containing the type and user details payload
    type: userActions.SET_USER_DETAILS,
    userDetails,
  };
};
