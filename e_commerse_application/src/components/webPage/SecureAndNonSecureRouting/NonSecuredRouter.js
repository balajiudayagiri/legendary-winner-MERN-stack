import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function NonSecuredRouter() {
  const authentication = localStorage.getItem("authen");
  return !authentication ? <Outlet /> : <Navigate to="/" />;
}
