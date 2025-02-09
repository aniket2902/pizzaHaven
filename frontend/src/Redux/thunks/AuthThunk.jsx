import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerFailed,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from "../slices/UserSlice";

const API_URL = "http://localhost:8080/auth";

export const registerUserThunk = (reqData) => async (dispatch) => {
  console.log("Register request data:", reqData.userData);
  try {
    dispatch(registerRequest());

    const { data } = await axios.post(`${API_URL}/signup`, reqData.userData);

    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.name) localStorage.setItem("name", data.name);

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch(registerSuccess({ jwt: data.jwt, user: data.name }));
  } catch (error) {
    console.log("Register error:", error);
    dispatch(registerFailed(error.response?.data?.message || error.message));
  }
};

export const loginUserThunk = (reqData) => async (dispatch) => {
  try {
    dispatch(loginRequest());

    const { data } = await axios.post(`${API_URL}/signin`, reqData.data);

    if (data.jwt) localStorage.setItem("jwt", data.jwt);
    if (data.name) localStorage.setItem("name", data.name);

    if (data.role === "ROLE_RESTAURANT_OWNER") {
      reqData.navigate("/admin/restaurant");
    } else {
      reqData.navigate("/");
    }

    dispatch(loginSuccess({ jwt: data.jwt, user: data.name }));
  } catch (error) {
    dispatch(
      loginFailure(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      )
    );
  }
};

export const logoutUserThunk = (reqData) => async (dispatch) => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("name");
  dispatch(logoutSuccess());
  reqData.navigate("/");
};
