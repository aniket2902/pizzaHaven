import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddresses: [],
  selectedAdress: null,
  jwt: localStorage.getItem("jwt") || null,
  userData: null,
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
      state.jwt = action.payload.jwt;
      state.success = "Register Success";
      state.userData = action.payload.user;
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
      state.userData = action.payload.user;
      state.success = "Login Success";
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logoutSuccess: (state) => {
      state.jwt = null;
      state.userData = null;
      state.success = "Logout Success";
    },
    getUserRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    getUserFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setAllUserAddresses: (state, action) => {
      state.user.shippingAddresses = action.payload;
    },
    saveShippingAddress: (state, action) => {
      state.selectedAdress = action.payload;
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
  setAllUserAddresses,
  saveShippingAddress,
  logoutSuccess,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
