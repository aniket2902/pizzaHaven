import axios from "axios";
import { addToCart } from "../slices/CartSlice";
import { toast } from "react-toastify";

export function addToCartThunk(pizza) {
  return async (dispatch, getState) => {
    try {
      const pizzaItemForCart = { id: pizza.id, itemSize: pizza.size };
      dispatch(addToCart(pizza));
      toast.success("Item added to cart");
      const response = await axios.post(`/additem`, pizzaItemForCart);
      //   if (response) {
      //   dispatch(addToCart(pizza));
      //   }
    } catch (error) {
      console.log(error);
    }
  };
}
