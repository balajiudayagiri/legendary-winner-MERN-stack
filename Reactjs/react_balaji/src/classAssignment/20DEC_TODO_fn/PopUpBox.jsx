import React, { useState } from "react";
import "./PopUpBox.css";

export default function PopUpBox(props) {
  const [input, setInput] = useState();
  const handleClose = () => {
    props.handleClose(null);
  };
  return (
    <>
      <div id="popup_bg">
        <div id="popup_box">
          <button onClick={handleClose}>&#x2716;</button>
          <br />
          <h3>Enter your TODO here to add into the TODO list</h3>
          <input
            type="text"
            placeholder="Enter your TODO"
            onChange={(e) => setInput(e.target.value)}
          />
          <div>
            <button
              onClick={() => {
                props.handleInputData(input);
                handleClose(null);
              }}>
              AddTODO
            </button>
            <button onClick={() => handleClose(null)}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
