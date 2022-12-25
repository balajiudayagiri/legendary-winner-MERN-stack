import React, { useState } from "react";
import Header from "./Header";
import PopUpBox from "./PopUpBox";
import "./TODOApp.css";

export default function TODOApp() {
  const [popUp, setPopUp] = useState();
  const [status, setStatus] = useState(true);
  const [todo, setTodo] = useState([]);
  const [progress, setProgress] = useState([]);
  const [review, setReview] = useState([]);
  const [complete, setComplete] = useState([]);
  const [editPop, setEditPop] = useState(false);
  const [editData, setEditData] = useState({});

  return (
    <>
      <Header
        handleButtonFromHeader={(data) => {
          switch (data) {
            case "addtodo":
              setPopUp(
                <PopUpBox
                  handleClose={(closeData) => setPopUp(closeData)}
                  handleInputData={(data) => setTodo([...todo, data])}
                />
              );
              break;
            case "status":
              setStatus(false);
              break;
            default:
              break;
          }
        }}
      />
      {status ? (
        <div className="todoList_home">
          <h1 onClick={() => setStatus(true)}>TODO List</h1>
          {todo
            .filter((item) => item !== undefined)
            .map((item, index) => (
              <div id="todo_list_data_home" key={index}>
                <h3>{item}</h3>
                <span>
                  <button
                    onClick={() => {
                      setEditPop(true);
                      setEditData({ item: item, index: index });
                    }}>
                    &#9998;
                  </button>
                  <button
                    onClick={() => {
                      setTodo(todo.filter((i) => item !== i));
                      setProgress([...progress, item]);
                    }}>
                    Start the task
                  </button>
                </span>
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
                  <button
                    onClick={() => {
                      setProgress(progress.filter((i) => item !== i));
                      setReview([...review, item]);
                    }}>
                    &#10004;
                  </button>
                </div>
              ))}
            </div>
            <div className="reviewList">
              <h1>Review</h1>
              {review.map((item, index) => (
                <>
                  <div className="review_list_data" key={index}>
                    <h3>{item}</h3>
                    <button
                      onClick={() => {
                        setReview(review.filter((i) => item !== i));
                        setComplete([...complete, item]);
                      }}>
                      Completed
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setReview(review.filter((i) => item !== i));
                      setTodo([...todo, item]);
                    }}>
                    Restart the task
                  </button>
                </>
              ))}
            </div>
            <div className="completeList">
              <h1>Complete</h1>
              {complete.map((item, index) => (
                <div className="complete_list_data" key={index}>
                  <h3>{item}</h3>
                  <button
                    onClick={() =>
                      setComplete(complete.filter((i) => item !== i))
                    }>
                    delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {popUp}
      {editPop ? (
        <>
          <div id="popup_bg">
            <div id="popup_box">
              <button onClick={() => setEditPop(false)}>&#x2716;</button>
              <br />
              <h3>Edit your TODO here </h3>
              <input
                type="text"
                value={editData.item}
                onChange={(e) =>
                  setEditData({ ...editData, item: e.target.value })
                }
              />
              <div>
                <button
                  onClick={() => {
                    todo.map((item, index) => {
                      if (index === editData.index) {
                        todo[index] = editData.item;
                      }
                      return null;
                    });
                    setEditPop(false);
                  }}>
                  save
                </button>
                <button onClick={() => setEditPop(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
