import axios from "axios";
import { BASE_URL } from "../../constants";
import { createOrder } from "../slices/OrderSlice";

export function createOrderThunk(totalPrice) {
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
