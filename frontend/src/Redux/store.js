import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
// import cartReducer from "./cartSlice";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: {
    userReducer: userReducer,
  },
  applymiddleware: [thunk],
});
