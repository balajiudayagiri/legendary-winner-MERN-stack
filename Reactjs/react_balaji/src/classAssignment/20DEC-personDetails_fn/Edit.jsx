import React, { useState } from "react";
import "./Edit.css";

export default function Edit(props) {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    phNo: "",
    address: "",
  });
  const handleInputData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div id="edit_bg">
      <div id="edit_popUp">
        <h1>Edit</h1>
        <button onClick={() => props.handleEditPopUp(false)}>&#10006;</button>
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
          type="number"
          placeholder="Enter your Age"
          name="age"
          onChange={handleInputData}
        />
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
              props.handleEditPopUp(false);
            }}
          >
            Edit Employee details
          </button>
          <button onClick={() => props.handleEditPopUp(false)}>Cancel</button>
        </span>
      </div>
    </div>
  );
}
