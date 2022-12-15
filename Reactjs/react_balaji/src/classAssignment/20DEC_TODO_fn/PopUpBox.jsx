import React, { useState } from "react";
import "./PopUpBox.css";

export default function PopUpBox(props) {
  const [input, setInput] = useState();
  const [todoList, setTodoList] = useState([]);
  // useEffect(() => {}, [input, todoList]);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleAddTODO = (e) => {
    setTodoList([...todoList, input]);
    console.log(todoList);
    setInput();
    e.preventDefault();
  };
  const handleClose = () => {
    props.handleClose(null);
  };
  return (
    <>
      <div id="popup_bg">
        <div id="popup_box">
          <button onClick={handleClose}>&#x2716;</button>
          <br />
          <form onSubmit={handleAddTODO}>
            <h3>Enter your TODO here to add into the TODO list</h3>
            <input
              type="text"
              placeholder="Enter your TODO"
              onChange={handleInput}
            />
            <div>
              <button type="submit">AddTODO</button>
              <button onClick={() => handleClose(null)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
