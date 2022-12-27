import React from "react";
import "./CounterApp.css";
import { useSelector, useDispatch } from "react-redux";
import { counterData } from "../store/action";

export default function CounterApp() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div id="counter_div">
      <h1>REDUX</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(counterData(5))}>+</button>
      <button onClick={() => dispatch(counterData(5))}>-</button>
    </div>
  );
}
