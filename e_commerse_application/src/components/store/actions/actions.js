import {
  Authentication_loginIn_Register,
  fetch_cart_data_POST,
} from "../../services/API";
import { USER_INFO } from "./actionTypes";

// synch
export const setUserInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});

export const set_Add_to_cart = (data) => ({
  type: "CART_DATA",
  payload: data,
});

//async
export const setLoginData = (pathName, userdata) => {
  return (dispatch) => {
    Authentication_loginIn_Register(pathName, userdata)
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("authenticationToken", res.token);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
          })
        );
        dispatch(setUserInfo(res));
      });
  };
};

export const setCartData = (cartItem) => {
  return (dispatch) => {
    fetch_cart_data_POST("addtocart", cartItem);
  };
};
