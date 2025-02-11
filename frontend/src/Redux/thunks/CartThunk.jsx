import axios from "axios";
import { addToCart } from "../slices/CartSlice";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants";
import api from "../api";

export function addToCartThunk(pizza) {
  return async (dispatch, getState) => {
    try {
      const pizzaItemForCart = { id: pizza.id, itemSize: pizza.size };
      // dispatch(addToCart(pizza));

      const token = localStorage.getItem("jwt");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${BASE_URL}/cart/addItem`,
        pizzaItemForCart,
        config
      );
      if (response) {
        console.log("response " + response);
        dispatch(addToCart(pizza));
        toast.success("Item added to cart");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
}
