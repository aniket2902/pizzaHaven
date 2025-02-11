import axios from "axios";
import { BASE_URL } from "../../constants";
import { createOrder, getAllOrders } from "../slices/OrderSlice";
import { toast } from "react-toastify";

export function razorpayOrderThunk(totalPrice) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${BASE_URL}/payment/${totalPrice}`);
      if (response) {
        dispatch(createOrder(response.data));
      }
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}

export function createOrderThunk(address) {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      address.id = null;
      const response = await axios.post(
        `${BASE_URL}/order/create`,
        address,
        config
      );
      console.log("Response from createOrderThunk:", response);
      if (response) {
        dispatch(createOrder(response.data));
      }
    } catch (error) {
      // dispatch(signInFailed(error.message));
      console.log("Error in creating order", error);
      toast.error("Error in creating order", error);
    }
  };
}

export function getAllOrdersThunk() {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.get(`${BASE_URL}/order/getOrders`, config);
      if (response) {
        dispatch(getAllOrders(response.data));
      }
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}

export function changeOrderStatusThunk(orderId, changedStatus) {
  return async (dispatch, getState) => {
    try {
      const token = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      // Send request to change order status
      const response = await axios.get(
        `${BASE_URL}/order/changeStatus?orderId=${orderId}&changedStatus=${changedStatus}`,
        config
      );

      if (response) {
        dispatch(getAllOrdersThunk()); // Refresh orders after status change
        toast.success("Changed order status successfully");
      }
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}
