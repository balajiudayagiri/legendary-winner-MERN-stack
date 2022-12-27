import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FakeStore() {
  const data = useSelector((state) => state.fakeData);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "fakeData", fakeData: res }));
  });
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <h1>{item.id}</h1>
      ))}
    </div>
  );
}
