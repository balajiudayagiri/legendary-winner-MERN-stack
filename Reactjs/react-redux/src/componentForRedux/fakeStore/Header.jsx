import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="navigation_bar">
      <Link to="/home">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/contact-us">
        <div>ContactUs</div>
      </Link>
      <Link to="/login-register">
        <div>Login/Registration</div>
      </Link>
    </div>
  );
}
