import React from "react";
import { useState } from "react";
import "./Header.css";

export default function Header(props) {
  const [search, setSearch] = useState();
  return (
    <header id="employee_details_header">
      <h1>&#9626;&#9624;Employee Details</h1>
      <div id="header_search_div">
        <input
          type="search"
          placeholder="Search details by Registered name or Id"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={""}>Search</button>
      </div>
      <button onClick={() => props.handlePopUpState(true)}>
        &#10010; Add Employee Details
      </button>
    </header>
  );
}
