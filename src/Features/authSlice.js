import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: 0,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = authSlice.actions;
export default authSlice.reducer;
