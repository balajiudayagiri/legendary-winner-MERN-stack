import React from "react";
import "./PopUpBox.css";

export default function PopUpBox(props) {
  const handleClose = () => {
    props.handleClose(null);
  };
  return (
    <>
      <div id="popup_bg">
        <div id="popup_box">
          <button onClick={handleClose}>&#x2716;</button>
          <br />
          {props.children}
        </div>
      </div>
    </>
  );
}
