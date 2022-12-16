import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <h1>MyTODO</h1>
      <button onClick={() => props.handleButtonFromHeader("status")}>
        Status
      </button>
      <button onClick={() => props.handleButtonFromHeader("addtodo")}>
        Add TODO
      </button>
    </header>
  );
}
