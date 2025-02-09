import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import cartReducer from "./slices/CartSlice";
import pizzaReducer from "./slices/PizzaSlice";
// import cartReducer from "./cartSlice";
import { thunk } from "redux-thunk";

export default configureStore({
  reducer: {
    userReducer,
    cartReducer,
    pizzaReducer,
  },
  applymiddleware: [thunk],
});
