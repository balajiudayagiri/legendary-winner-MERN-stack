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
  const handleButtonFromHeader = (data) => {
    switch (data) {
      case "addtodo":
        console.log(data, "handleButtonFromHeader switch 1");
        setPopUp(
          <PopUpBox handleClose={(closeData) => handleClose(closeData)}>
            <h3>Enter your TODO here to add into the TODO list</h3>
            <input type="text" placeholder="Enter your TODO" />
            <div>
              <button>AddTODO</button>
              <button>Cancel</button>
            </div>
          </PopUpBox>
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
