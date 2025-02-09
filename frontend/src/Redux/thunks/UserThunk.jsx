import axios from "axios";
import { saveShippingAddress, setAllUserAddresses } from "../slices/UserSlice";

export function getAllUserAddressesThunk(userId) {
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
      // dispatch(saveShippingAddress(address));
      const response = await axios.post("/fakeApi/address", address);
      dispatch(getAllUserAddressesThunk());
      // if (response) {
      //   dispatch(saveShippingAddress(address));
      //   dispatch(getAllUserAddressesThunk());
      // }
    } catch (error) {
      console.log(error);
    }
  };
}
