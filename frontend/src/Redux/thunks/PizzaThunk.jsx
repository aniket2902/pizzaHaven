import axios from "axios";
import { setAllPizzas, setPizzaDetails } from "../slices/PizzaSlice";
import { BASE_URL } from "../../constants";

export function getAllPizzasThunk() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${BASE_URL}/pizzas`);
      dispatch(setAllPizzas(response.data));
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
export function deletePizzaThunk(id) {
  return async (dispatch, getState) => {
    try {
      console.log("hello");
      const response = await axios.delete(`${BASE_URL}/pizzas/${id}`);
      // dispatch(setPizzaDetails(response.data));
      if (response) dispatch(getAllPizzasThunk());
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}
