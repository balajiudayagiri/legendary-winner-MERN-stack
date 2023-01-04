import React from "react";
import { useSelector } from "react-redux";
import "./Body.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Products() {
  const data = useSelector((state) => state.fetchedData);

  return (
    <div id="product_div">
      {data.map((item, index) => (
        <Card
          variant="outlined"
          sx={{
            maxWidth: 345,
            backgroundColor: "#ffffff26",
            color: "inherit",
            boxShadow: "gray",
          }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={item.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.product_name}
            </Typography>
            <Typography variant="body2">
              <h3 className="h3cardprice">
                &#8377; {item.productDetails.price}
              </h3>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Buy</Button>
            <Button variant="outlined">Add to Cart</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
