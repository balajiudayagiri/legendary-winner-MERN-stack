import React, { useState } from "react";
import "./PopUp.css";

export default function PopUp(props) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phNo: "",
    address: "",
  });
  const handleInputData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div id="popup_bg">
      <div id="popup_card">
        <button onClick={() => props.handlePopUpState(false)}>&#10006;</button>
        <span className="popup_name_input">
          <input
            type="text"
            placeholder="Enter your First Name"
            name="firstName"
            onChange={handleInputData}
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lastName"
            onChange={handleInputData}
          />
        </span>
        <input
          type="email"
          placeholder="Enter your Email ID"
          name="email"
          onChange={handleInputData}
        />
        <input
          type="number"
          placeholder="Enter your mobile number"
          name="phNo"
          onChange={handleInputData}
        />
        <input
          type="text"
          placeholder="Enter your Address"
          name="address"
          onChange={handleInputData}
        />
        <span className="popup_btn_for">
          <button
            onClick={() => {
              props.handleAddDetails(details);
              props.handlePopUpState(false);
            }}
          >
            Add Employee details
          </button>
          <button onClick={() => props.handlePopUpState(false)}>Cancel</button>
        </span>
      </div>
    </div>
  );
}
