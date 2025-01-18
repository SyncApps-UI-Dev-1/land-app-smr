import { configureStore } from "@reduxjs/toolkit";
import landReducer from "./Features/landSlice";
const store = configureStore({
  reducer: {
    land: landReducer,
  },
});

export default store;
