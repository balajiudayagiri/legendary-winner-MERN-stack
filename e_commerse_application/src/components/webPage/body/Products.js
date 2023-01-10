import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { setCartData } from "../../store/actions/actions";
import "./Body.css";
import { cart_item } from "../../services/API";

export default function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.fetchedData);
  const handleAddToCart = (item) => {
    dispatch(setCartData(item));
    dispatch(cart_item());
  };
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
          <Link to="/productDescription" state={{ id: item._id }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.image}
              sx={{ cursor: "pointer" }}
            />
          </Link>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ cursor: "default" }}>
              {item.product_name}
            </Typography>
            <Typography variant="body2" sx={{ cursor: "default" }}>
              <h3 className="h3cardprice">
                &#8377; {item.productDetails.price}
              </h3>
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Buy</Button>
            <Button variant="outlined" onClick={() => handleAddToCart(item)}>
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
