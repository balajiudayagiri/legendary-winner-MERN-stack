import { Authentication_loginIn_Register } from "../../services/API";
import { USER_INFO } from "./actionTypes";

// synch
export const setUserInfo = (data) => ({
  type: USER_INFO,
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
