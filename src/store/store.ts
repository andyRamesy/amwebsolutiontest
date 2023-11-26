import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import mapReducer from "./reducers/mapReducer";

export const store = configureStore({
  reducer: {
    userReducer,
    mapReducer
  },
});
