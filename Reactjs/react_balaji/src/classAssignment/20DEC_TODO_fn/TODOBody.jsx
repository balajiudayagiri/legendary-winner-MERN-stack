import React from "react";

export default function TODOBody(props) {
  console.log(props.inputData);
  console.log(props.moveToProgress);
  return (
    <div id="todo_body">
      <h1>TODO task</h1>
      <div className="list_items">{props.inputData}</div>
    </div>
  );
}
