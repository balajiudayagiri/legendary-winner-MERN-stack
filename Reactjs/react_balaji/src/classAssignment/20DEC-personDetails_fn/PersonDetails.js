import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import PopUp from "./PopUp";
import "./PersonDetails.css";
// import Delete from "./Delete";
import Edit from "./Edit";

export default function PersonDetails() {
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [details, setDetails] = useState([
    { firstName: "", lastName: "", age: "", email: "", phNo: "", address: "" },
  ]);
  const handleDeletePopUp = (itemfromChild) => {
    setDetails(details.filter((item) => item !== itemfromChild));
  };
  const handleEditPopUp = (itemfromChild, i) => {
    console.log(itemfromChild, i);
  };
  return (
    <>
      <Header handlePopUpState={(s) => setPopUp(s)} />
      <Body
        details={details}
        handleDeletePopUp={(item) => {
          handleDeletePopUp(item);
        }}
        handleEditPopUp={(s, item, i) => {
          setEditPopUp(s);
          handleEditPopUp(item, i);
        }}
      />
      {popUp ? (
        <PopUp
          handlePopUpState={(s) => setPopUp(s)}
          handleAddDetails={(data) => setDetails([...details, data])}
        />
      ) : null}
      {editPopUp ? <Edit handleEditPopUp={(s) => setEditPopUp(s)} /> : null}
    </>
  );
}
