import axios from "axios";
import { setPizzaDetails } from "../slices/PizzaSlice";

export function getAllPizzasThunk() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("/fakeApi/pizzas");
      dispatch(signInUser(response.user));
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}

export function getPizzaByIdThunk(id) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`/fakeApi/pizza/${id}`);
      dispatch(setPizzaDetails(response.data));
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}
