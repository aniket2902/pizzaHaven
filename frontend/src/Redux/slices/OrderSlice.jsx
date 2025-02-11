import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentOrder: null,
  allOrders: [],
  status: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.currentOrder = action.payload;
    },
    removeOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    updateOrderStatus: (state, action) => {
      const { id, status } = action.payload;
      const existingOrder = state.orders.find((order) => order.id === id);
      if (existingOrder) {
        existingOrder.status = status;
      }
    },
    getAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
  },
});

export const { createOrder, removeOrder, updateOrderStatus, getAllOrders } =
  orderSlice.actions;

export default orderSlice.reducer;
