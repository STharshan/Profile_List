import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./ProfileSlice";

const store = configureStore({
  reducer: {
    profiles: profileReducer,
  },
});

export default store;