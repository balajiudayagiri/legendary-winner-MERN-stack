import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./LoginOrRegister/LoginOrRegister.css";

export default function LoginOrRegister() {
  return (
    <div id="authentication-body">
      <div>
        <Link to="/login-or-registration/sign-in">
          <Button variant="outlined">Sign In</Button>
        </Link>
        <Link to="/login-or-registration/sign-up">
          <Button variant="outlined">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
}
