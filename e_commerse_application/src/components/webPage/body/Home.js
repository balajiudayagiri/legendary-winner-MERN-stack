import React from "react";
import "./Body.css";
import img1 from "../../image/laptop.png";
import img2 from "../../image/shopping-bag.png";

export default function Home() {
  return (
    <div id="home_div">
      <h1>Hello, {"name"}</h1>
      <div>
        <div>
          <img src={img1} alt="404 error" height="400px" width="400px" />
          <img src={img2} alt="404 error" height="200px" width="200px" />
        </div>
        <h1>Aswome Welcomes you</h1>
      </div>
    </div>
  );
}
