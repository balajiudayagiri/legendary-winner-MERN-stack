import React from "react";
import StatusAllOver from "./StatusAllOver";
import StatusAllProducts from "./StatusAllProducts";
import "./Root.css";
import StatusOfprofit from "./StatusOfprofit";

export default function Root() {
  return (
    <div className="root">
      <StatusAllOver />
      <StatusAllProducts />
      <StatusOfprofit />
    </div>
  );
}
