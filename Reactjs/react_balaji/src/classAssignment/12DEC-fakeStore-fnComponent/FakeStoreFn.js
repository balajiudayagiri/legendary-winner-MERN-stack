import React, { useEffect, useState } from "react";
import "./FakeStoreFn.css";
import "./slider/Slider.css";

export default function FakeStoreFn() {
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [rangeValue, setRangeValue] = useState({ left: 0, right: 1000 });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const handleOnclickFromSelectedProduct = (item) => setSelectedData(item);
  const handleBackButton = () => setSelectedData([]);
  return (
    <>
      <h1>FakeStore</h1>
      <div id="filter">
        <div className="middle">
          <div className="multi-range-slider">
            <input
              type="range"
              id="input-left"
              min="0"
              max="1000"
              value={rangeValue.left}
              onChange={(e) =>
                setRangeValue({
                  left: parseInt(e.target.value),
                  right: rangeValue.right,
                })
              }
            />
            <input
              type="range"
              id="input-right"
              min="0"
              max="1000"
              value={rangeValue.right}
              onChange={(e) =>
                setRangeValue({
                  left: rangeValue.left,
                  right: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        <h4>{`Price Range ${rangeValue.left} - ${rangeValue.right}`}</h4>
      </div>
      {selectedData.length === 0 ? (
        <div id="productPage">
          {data
            .filter(
              (item) =>
                item.price >= rangeValue.left && item.price <= rangeValue.right
            )
            .map((item, index) => (
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
