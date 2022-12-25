import React, { createContext } from "react";
import Parent from "./Parent";

export const MyContextFn = createContext();
export default function GrandParent() {
  return (
    <div>
      <MyContextFn.Provider value="BALAJI_FunctionClass">
        <Parent />
      </MyContextFn.Provider>
    </div>
  );
}
