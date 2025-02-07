import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  jwt: localStorage.getItem("jwt") || null,
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
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.success = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.jwt = action.payload.jwt;
      state.user = action.payload.user;
      state.success = "Login Success";
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.jwt = null;
      state.user = null;
      localStorage.removeItem("jwt");
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailed,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} = userSlice.actions;

export default userSlice.reducer;
