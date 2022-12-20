import React from "react";
import "./Delete.css";

export default function Delete(props) {
  return (
    <div id="delete_bg">
      <div id="delete_popUp">
        <h1>Are you sure? you want to delete this record</h1>
        <span>
          <button
            onClick={() => {
              props.handleDeleteConfirm(true);
              props.handleDeletePopUp(false);
            }}
          >
            Yes
          </button>
          <button onClick={() => props.handleDeletePopUp(false)}>Cancel</button>
        </span>
      </div>
    </div>
  );
}
