import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  jwt: null,
  isLoading: false,
  error: null,
  success: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    registerSuccess: (state, action) => {
      state.isLoading = false;
      state.jwt = action.payload;
      state.success = "Register Success";
    },
    registerFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    signInUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
    signInFailed: (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailed,
  signInUser,
  signInFailed,
} = userSlice.actions;

export default userSlice.reducer;
