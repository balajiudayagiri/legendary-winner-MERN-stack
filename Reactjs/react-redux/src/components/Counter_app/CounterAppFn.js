import React from "react";
import "./CounterApp.css";
import { useSelector, useDispatch } from "react-redux";

export default function CounterApp() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div id="counter_div">
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "count" })}>+</button>
      <button onClick={() => dispatch({ type: "count" })}>-</button>
    </div>
  );
}
