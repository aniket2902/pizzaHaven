import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { updateCart } from "../../utils/CartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      cartItems: [],
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeCartItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i.id !== id);
      updateCart(state);
    },
    resetCart: (state) => {
      state = initialState;
    },
  },
});

export const { addToCart, clearCartItems, removeCartItem, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;
