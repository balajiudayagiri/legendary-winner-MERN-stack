import { Authentication_loginIn_Register } from "../../services/API";
import { USER_INFO } from "./actionTypes";

// synch
export const setUserInfo = (data) => ({
  type: USER_INFO,
  payload: data,
});

//async
export const setLoginData = (pathName, userInfo) => {
  return (dispatch) => {
    Authentication_loginIn_Register(pathName, userInfo)
      .then((res) => res.json())
      .then((res) => dispatch(setUserInfo(res)));
  };
};
