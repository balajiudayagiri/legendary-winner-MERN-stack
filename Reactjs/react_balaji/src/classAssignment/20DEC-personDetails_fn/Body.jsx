import React from "react";
import "./Body.css";

export default function Body(props) {
  const employeeDetails = props.details.filter(
    (item) =>
      item.firstName !== "" &&
      item.lastName !== "" &&
      item.email !== "" &&
      item.phNo !== "" &&
      item.address !== ""
  );
  console.log(employeeDetails);
  return (
    <div id="employee_details_div">
      <h1>Details</h1>
      <table id="table_employee_data" border="2">
        <tr>
          <th>Employee ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-Mail</th>
          <th>Mobile Number</th>
          <th>Address</th>
        </tr>
        {employeeDetails.map((item, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phNo}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
