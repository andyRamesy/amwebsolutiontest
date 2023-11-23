import { userActions } from "../actions/userActions";

interface UserState {
  userDetails: null;
}

// Initial state for UserState
const intiState: UserState = {
  userDetails: null,
};

// Reducer function managing state changes based on dispatched actions
const reducer = (state = intiState, action: any) => {
  switch (action.type) {
     // Action to set user details
    case userActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
