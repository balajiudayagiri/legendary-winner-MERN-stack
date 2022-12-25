import React, { useState } from "react";
import Body from "./Body";
import Header from "./Header";
import PopUp from "./PopUp";
import "./PersonDetails.css";
import Edit from "./Edit";

export default function PersonDetails() {
  const [popUp, setPopUp] = useState(false);
  const [editPopUp, setEditPopUp] = useState(false);
  const [details, setDetails] = useState([]);
  const [dataForEdit, setDataForEdit] = useState();
  const handleDeletePopUp = (itemfromChild) =>
    setDetails(details.filter((i) => i !== itemfromChild));
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
          setDataForEdit({ data: item, index: i });
        }}
      />
      {popUp ? (
        <PopUp
          handlePopUpState={(s) => setPopUp(s)}
          handleAddDetails={(data) => setDetails([...details, data])}
        />
      ) : null}
      {editPopUp ? (
        <Edit
          handleEditPopUp={(s) => setEditPopUp(s)}
          handleEditDetails={(s) => {
            details.map((item, index) => {
              if (index === dataForEdit.index) {
                details[index] = s;
              }
              return null;
            });
          }}
          dataForEdit={dataForEdit.data}
        />
      ) : null}
    </>
  );
}
