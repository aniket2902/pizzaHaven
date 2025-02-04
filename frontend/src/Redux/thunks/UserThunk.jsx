import axios from "axios";
import { signInFailed, signInUser } from "../slices/UserSlice";

export function signInUserThunk(credentials) {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post("/fakeApi/signin", credentials);
      dispatch(signInUser(response.user));
    } catch (error) {
      dispatch(signInFailed(error.message));
    }
  };
}
