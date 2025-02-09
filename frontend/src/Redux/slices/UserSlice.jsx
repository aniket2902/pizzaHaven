import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  shippingAddresses: [],
  selectedAdress: null,
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
    setAllUserAddresses: (state, action) => {
      state.user.shippingAddresses = action.payload;
    },
    setShippingAddress: (state, action) => {
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
  logout,
  setAllUserAddresses,
  setShippingAddress,
} = userSlice.actions;

export default userSlice.reducer;
