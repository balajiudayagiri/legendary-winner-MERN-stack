import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import PopUp from "./PopUp";
import "./PersonDetails.css";

export default function PersonDetails() {
  const [popUp, setPopUp] = useState(false);
  const [details, setDetails] = useState([
    { firstName: "", lastName: "", email: "", phNo: "", address: "" },
  ]);
  console.log(details);
  return (
    <>
      <Header handlePopUpState={(s) => setPopUp(s)} />
      <Body details={details} />
      {popUp ? (
        <PopUp
          handlePopUpState={(s) => setPopUp(s)}
          handleAddDetails={(data) => setDetails([...details, data])}
        />
      ) : null}
    </>
  );
}
