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
// export function signInUserThunk(credentials) {
//   return async (dispatch, getState) => {
//     try {
//       const response = await axios.post("/fakeApi/signin", credentials);
//       dispatch(signInUser(response.user));
//     } catch (error) {
//       dispatch(signInFailed(error.message));
//     }
//   };
// }

export const updateUserThunk = (reqData) => async (dispatch, getState) => {
  try {
    dispatch(updateUserRequest());

    const state = getState();
    const token = state.userReducer.jwt; // Get JWT token from state

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `http://localhost:8080/users/update`, // Adjust endpoint as per backend
      reqData.userData,
      config
    );

    dispatch(updateUserSuccess(data));
    reqData.setMessage("Profile updated successfully"); // Callback for UI feedback
  } catch (error) {
    dispatch(updateUserFailure(error.response?.data?.message || error.message));
    reqData.setMessage("Failed to update profile"); // Callback for UI feedback
  }
};
