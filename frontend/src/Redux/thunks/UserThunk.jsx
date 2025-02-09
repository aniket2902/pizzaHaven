import axios from "axios";
import { setAllUserAddresses } from "../slices/UserSlice";

export function getAllUserAddressesThunk() {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get("/fakeApi/addresses");
      dispatch(setAllUserAddresses(response.addresses));
    } catch (error) {
      console.log(error);
    }
  };
}

export function saveShippingAddressThunk(address) {
  return async (dispatch, getState) => {
    try {
      await axios.post("/fakeApi/address", address);
      dispatch(getAllUserAddressesThunk());
    } catch (error) {
      console.log(error);
    }
  };
}
