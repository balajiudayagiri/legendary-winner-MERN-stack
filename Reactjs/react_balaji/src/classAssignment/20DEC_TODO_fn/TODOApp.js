import React, { useState } from "react";
import Header from "./Header";
import PopUpBox from "./PopUpBox";
import TODOBody from "./TODOBody";
import "./TODOApp.css";

export default function TODOApp() {
  const [popUp, setPopUp] = useState();
  const handleClose = (closeData) => {
    setPopUp(closeData);
  };
  // console.log(input);
  const handleButtonFromHeader = (data) => {
    switch (data) {
      case "addtodo":
        setPopUp(
          <PopUpBox handleClose={(closeData) => handleClose(closeData)} />
        );
        break;
      case "status":
        console.log(data, "handleButtonFromHeader switch 2");

        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header handleButtonFromHeader={(data) => handleButtonFromHeader(data)} />
      <TODOBody />
      {popUp}
    </>
  );
}
