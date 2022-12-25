import React, { useContext } from "react";
import { MyContextFn } from "./GrandParent";

export default function Child() {
  const MyContextDataFromGrandParent = useContext(MyContextFn);
  return (
    <div>
      <h1>{MyContextDataFromGrandParent}</h1>
    </div>
  );
}
