import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.user = action.payload;
    },
    signInFailed: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
  },
});

export const { signInUser, signInFailed } = userSlice.actions;

export default userSlice.reducer;
