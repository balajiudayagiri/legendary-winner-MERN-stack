import React, { useEffect, useState } from "react";
import "./FakeStoreFn.css";

export default function FakeStoreFn() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const handleOnclickFromSelectedProduct = (item) => {
    setSelectedData(item);
  };
  const handleBackButton = () => {
    setSelectedData("");
  };
  return (
    <>
      <h1>FackStore</h1>
      {selectedData.length === 0 ? (
        <div id="productPage">
          {data.map((item, index) => (
            <div
              key={index}
              className="product_div"
              onClick={() => handleOnclickFromSelectedProduct(item)}
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
      ) : (
        <div className="product_div_view">
          <button className="back_btn" onClick={handleBackButton}>
            Back
          </button>
          <div>
            <img
              src={selectedData.image}
              alt="product_image_view"
              style={{ height: "300px", width: "300px" }}
            />
            <div className="product_details">
              <h1>{selectedData.title}</h1>
              <p
                style={{
                  fontWeight: "bolder",
                }}
              >{`$ ${selectedData.price}`}</p>
              <p>{selectedData.description}</p>
              <p
                style={{
                  color: selectedData.rating.rate >= 4 ? "green" : "red",
                  fontWeight: "bolder",
                }}
              >{`⭐${selectedData.rating.rate}`}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
