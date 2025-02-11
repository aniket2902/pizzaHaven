import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzasDetails: {},
  allPizzas: [],
  pizzasByOutlet: {},
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizzaDetails: (state, action) => {
      state.pizzasDetails = action.payload;
    },
    setAllPizzas: (state, action) => {
      state.allPizzas = action.payload;
    },
    // setPizzasByOutlet: (state, action) => {
    //     const { outletId, pizzas } = action.payload;
    //     state.pizzasByOutlet[outletId] = pizzas;
    // },
  },
});

export const { setPizzaDetails, setAllPizzas, setPizzasByOutlet } =
  pizzaSlice.actions;

export default pizzaSlice.reducer;
