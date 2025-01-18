import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboard: 0,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = dashboardSlice.actions;

export default dashboardSlice.reducer;
