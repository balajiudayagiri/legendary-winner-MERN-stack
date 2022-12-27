import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchedData } from "../store/action";
import HomeProducts from "./HomeProducts";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fakeData);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => dispatch(fetchedData(res)));
  });
  return (
    <div id="product_div">
      {data.map((item, index) => (
        <HomeProducts item={item} key={index} />
      ))}
    </div>
  );
}
