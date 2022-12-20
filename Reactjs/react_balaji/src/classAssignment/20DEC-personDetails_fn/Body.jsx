import React from "react";
import "./Body.css";

export default function Body(props) {
  const employeeDetails = props.details.filter(
    (item) =>
      item.firstName !== "" &&
      item.lastName !== "" &&
      item.age !== "" &&
      item.email !== "" &&
      item.phNo !== "" &&
      item.address !== ""
  );
  // console.log(employeeDetails);
  return (
    <div id="employee_details_div">
      <h1>Details</h1>
      <div id="table_emp_data_div">
        <table id="table_employee_data">
          <thead>
            <th>Emp ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>E-Mail</th>
            <th>Mobile Number</th>
            <th>Address</th>
            <th></th>
          </thead>
          {employeeDetails.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.phNo}</td>
              <td>{item.address}</td>
              <td>
                <button
                  onClick={() => props.handleEditPopUp(true, item, index)}
                >
                  &#9998;
                </button>
                <button onClick={() => props.handleDeletePopUp(item)}>
                  &#10006;
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
