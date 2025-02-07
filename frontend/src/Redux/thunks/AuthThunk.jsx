import axios from "axios";
import { 
  registerRequest, 
  registerSuccess, 
  registerFailed, 
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} from "../slices/UserSlice";


const API_URL = "http://localhost:8080/auth";

export const registerUserThunk = (reqData) => async (dispatch) => {
    console.log("Register request data:", reqData.userData);
    try {
      dispatch(registerRequest());
  
      const { data } = await axios.post(`${API_URL}/signup`, reqData.userData);
      
      if (data.jwt) localStorage.setItem("jwt", data.jwt);
  
      if (data.role === "ROLE_RESTAURANT_OWNER") {
        reqData.navigate("/admin/restaurant");
      } else {
        reqData.navigate("/");
      }
  
      dispatch(registerSuccess(data.jwt));
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
  
      if (data.role === "ROLE_RESTAURANT_OWNER") {
        reqData.navigate("/admin/restaurant");
      } else {
        reqData.navigate("/");
      }
  
      dispatch(loginSuccess({ jwt: data.jwt, user: data.user }));
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



