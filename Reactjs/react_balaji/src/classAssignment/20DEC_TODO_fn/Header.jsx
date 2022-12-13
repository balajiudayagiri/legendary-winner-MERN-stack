import React from "react";
import "./Header.css";

export default function Header(props) {
  const handleAddTODO = () => {
    props.handleButtonFromHeader("addtodo");
    // console.log("handleAddTODO");
  };
  const handleStatus = () => {
    props.handleButtonFromHeader("status");
    // console.log("handleStatus");
  };
  return (
    <header>
      <h1>MyTODO</h1>
      <button onClick={handleStatus}>Status</button>
      <button onClick={handleAddTODO}>Add TODO</button>
    </header>
  );
}
