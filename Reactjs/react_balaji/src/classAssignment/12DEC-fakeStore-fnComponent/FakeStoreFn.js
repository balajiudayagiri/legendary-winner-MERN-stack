import React, { useEffect, useState } from "react";

export default function FakeStoreFn() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  });
  const handleOnclickFromSelectedProduct = (item) => {
    console.log(item);
  };
  return (
    <div id="productPage">
      {data.map((item) => (
        <div
          className="product_div"
          onClick={(item) => handleOnclickFromSelectedProduct(item)}
        >
          <img
            src={item.image}
            alt="product_image"
            style={{ height: "100px", width: "100px" }}
          />
          <h4>{item.title}</h4>
          <p>{`$ ${item.price}`}</p>
        </div>
      ))}
    </div>
  );
}
