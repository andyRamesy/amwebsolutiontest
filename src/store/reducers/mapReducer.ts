import { mapActions } from "../actions/mapActions";


interface CenterState {
    centerDetails: null;
}

const initState: CenterState = {
    centerDetails: null
}

const reducer = (state = initState, action:any) => {
    switch (action.type) {
        // Action to set user details
       case mapActions.SET_MAP_VIEW:
         return {
           ...state,
           centerDetails: action.centerDetails,
         };
       default:
         return state;
     }
}

export default reducer;
