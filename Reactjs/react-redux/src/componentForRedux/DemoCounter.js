import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incCounter } from "./store/action";

export default function DemoCounter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div id="counter_div">
      <h1>{counter}</h1>
      <button
        onClick={() =>
          dispatch(
            incCounter({ type: "count", payload: "from DemoCounter.js data" })
          )
        }>
        +
      </button>
      <button onClick={() => dispatch({ type: "count" })}>-</button>
    </div>
  );
}
