import React, { useState } from "react";
import { useEffect } from "react";
import "./Edit.css";

export default function Edit(props) {
  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(props.dataForEdit);
  }, [props.dataForEdit]);
  const handleInputData = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <div id="edit_bg">
      <div id="edit_popUp">
        <span>
          <h1>Edit</h1>
          <button onClick={() => props.handleEditPopUp(false)}>&#10006;</button>
        </span>
        <span className="popup_name_input">
          <input
            type="text"
            placeholder="Enter your First Name"
            name="firstName"
            value={details.firstName}
            onChange={handleInputData}
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lastName"
            value={details.lastName}
            onChange={handleInputData}
          />
        </span>
        <input
          type="number"
          placeholder="Enter your Age"
          name="age"
          value={details.age}
          onChange={handleInputData}
        />
        <input
          type="email"
          placeholder="Enter your Email ID"
          name="email"
          value={details.email}
          onChange={handleInputData}
        />
        <input
          type="number"
          placeholder="Enter your mobile number"
          name="phNo"
          value={details.phNo}
          onChange={handleInputData}
        />
        <input
          type="text"
          placeholder="Enter your Address"
          name="address"
          value={details.address}
          onChange={handleInputData}
        />
        <span className="popup_btn_for">
          <button
            onClick={() => {
              props.handleEditDetails(details);
              props.handleEditPopUp(false);
            }}>
            Edit Employee details
          </button>
          <button onClick={() => props.handleEditPopUp(false)}>Cancel</button>
        </span>
      </div>
    </div>
  );
}
