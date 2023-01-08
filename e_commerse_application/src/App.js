import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AwesomeStoreMain from "./components/AwesomeStoreMain";
import { setUserInfo } from "./components/store/actions/actions";

export default function App() {
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const authenticationToken = localStorage.getItem("authenticationToken");
  useEffect(() => {
    dispatch(setUserInfo({ ...userInfo, token: authenticationToken }));
  });

  return <AwesomeStoreMain />;
}
