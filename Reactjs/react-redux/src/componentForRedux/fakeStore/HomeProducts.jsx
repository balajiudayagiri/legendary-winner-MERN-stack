import React from "react";
import "./HomeProducts.css";

export default function HomeProducts({ item, index }) {
  return (
    <div className="product_div">
      <img src={item.image} height="150px" width="150px" alt="photoError" />
      <h4>{item.title}</h4>
      <h4>price : {item.price}$</h4>
    </div>
  );
}
