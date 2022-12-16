import React, { useState } from "react";
import Header from "./Header";
import PopUpBox from "./PopUpBox";
import "./TODOApp.css";

export default function TODOApp() {
  const [popUp, setPopUp] = useState();
  const [status, setStatus] = useState(true);
  const [todo, setTodo] = useState([]); //object used to store the data from child
  const [progress, setProgress] = useState([]);
  const [review, setReview] = useState([]);
  const [complete, setComplete] = useState([]);
  const handleClose = (closeData) => setPopUp(closeData); //Close Function
  const handleInputData = (data) => {
    setTodo([...todo, data]);
  };
  const handleMoveToProgress = (i) => {
    setTodo(todo.filter((item) => i !== item));
    setProgress([...progress, i]);
  };
  const handleMoveToReview = (i) => {
    setProgress(progress.filter((item) => i !== item));
    setReview([...review, i]);
  };
  const handleMoveToComplete = (i) => {
    setReview(review.filter((item) => i !== item));
    setComplete([...complete, i]);
  };
  const handleDeleteFormComplete = (i) => {
    setComplete(complete.filter((item) => i !== item));
  };
  const handleButtonFromHeader = (data) => {
    switch (data) {
      case "addtodo":
        setPopUp(
          <PopUpBox
            handleClose={(closeData) => handleClose(closeData)}
            handleInputData={handleInputData}
          />
        );
        break;
      case "status":
        setStatus(false);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header handleButtonFromHeader={(data) => handleButtonFromHeader(data)} />
      {status ? (
        <div className="todoList_home">
          <h1 onClick={() => setStatus(true)}>TODO List</h1>
          {todo.map((item, index) => (
            <div id="todo_list_data_home" key={index}>
              <h3>{item}</h3>
              <button onClick={() => handleMoveToProgress(item)}>
                Start the task
              </button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <button onClick={() => setStatus(true)} className="back_btn">
            &#8592; TODO
          </button>
          <div id="todo_data_all">
            <div className="progressList">
              <h1>Progress</h1>
              {progress.map((item, index) => (
                <div className="progress_list_data" key={index}>
                  <h3>{item}</h3>
                  <button onClick={() => handleMoveToReview(item)}>
                    &#10004;
                  </button>
                </div>
              ))}
            </div>
            <div className="reviewList">
              <h1>Review</h1>
              {review.map((item, index) => (
                <div className="review_list_data">
                  <h3>{item}</h3>
                  <button onClick={() => handleMoveToComplete(item)}>
                    Review the task
                  </button>
                </div>
              ))}
            </div>
            <div className="completeList">
              <h1>Complete</h1>
              {complete.map((item, index) => (
                <div className="complete_list_data">
                  <h3>{item}</h3>
                  <button onClick={() => handleDeleteFormComplete(item)}>
                    delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {popUp}
    </>
  );
}
