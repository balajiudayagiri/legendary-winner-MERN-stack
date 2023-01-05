import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Body.css";
import MediaCard from "./MediaCard";
import imgShopping from "../../image/shopping.png";
import imgShopping1 from "../../image/shopping1.png";
import imgShopping2 from "../../image/shopping2.png";

export default function Home() {
  const data = useSelector((state) => state.reducer.fetchedData);
  const dispatch = useDispatch();
  const media_card_data = data
    .filter((item, index) => (index + 1) % 4 === 0)
    .map((item) => {
      return {
        image: item.image,
        name: item.product_name,
        context: item.productDetails.Description,
      };
    });
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "USER_INFO", payload: res }));
  });
  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>
          Hi, Balaji
        </Typography>
        <Typography variant="h3" gutterBottom>
          EveryThing you need is here
        </Typography>
        <img src={imgShopping} alt="404_image :( error" height="200px" />
        <img src={imgShopping1} alt="404_image :( error" height="200px" />
        <img src={imgShopping2} alt="404_image :( error" height="200px" />
      </Box>
      <hr />
      <div id="home_div">
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h7" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="h7" gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
        <div id="home_card_div">
          <div className="media_card">
            {media_card_data.map((item) => (
              <MediaCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
