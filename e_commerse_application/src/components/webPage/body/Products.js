import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";

export default function Products() {
  const data = useSelector((state) => state.fetchedData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "fetch_get", payload: res.products }));
  }, []);
  return (
    <div id="product_div">
      {data.map((item, index) => (
        <>
          <Badge badgeContent={item.stock + " in Stock "} color="primary">
            <div className="product_data" key={index}>
              <img
                src={item.thumbnail}
                alt="thumbnail"
                height="150px"
                width="100%"
              />
              <h3>
                {item.brand}-{item.title}
              </h3>
              <h3>
                &#8377; <s style={{ color: "#424242" }}>{item.price}</s>
                {"  "}
                {item.price - item.discountPercentage / 100}
              </h3>
            </div>
          </Badge>
        </>
      ))}
    </div>
  );
}
