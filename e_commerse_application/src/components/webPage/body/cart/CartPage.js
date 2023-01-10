import React from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const data = useSelector((state) => state.add_to_cart_Reducer.cart);
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <h1>
          {item.product_name}-----
          {item.product_category}
        </h1>
      ))}
    </div>
  );
}
