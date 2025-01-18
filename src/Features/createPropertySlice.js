import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  property: 0,
};

const createPropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = createPropertySlice.actions;
export default createPropertySlice.reducer;
