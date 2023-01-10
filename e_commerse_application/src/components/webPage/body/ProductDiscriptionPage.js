import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { setCartData } from "../../store/actions/actions";
import { cart_item } from "../../services/API";
import "./Body.css";

function ImgMediaCard({ dP }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(setCartData(dP));
    dispatch(cart_item());
  };
  return (
    <Card
      sx={{ display: "flex", padding: "20px", width: "100%", height: "100%" }}>
      <CardMedia
        sx={{ width: "60%", height: "100%" }}
        component="img"
        alt="green iguana"
        height="140"
        image={dP.image}
      />
      <div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dP.product_name}-{dP.product_category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dP.productDetails.Description}
          </Typography>
          <Rating
            name="read-only"
            value={Math.floor(Math.random() * 5 + 1)}
            readOnly
          />
          <Typography gutterBottom variant="h5" component="div">
            &#8377; {dP.productDetails.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Buy</Button>
          <Button variant="outlined" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </CardActions>
        <Typography variant="body2" color="text.secondary" sx={{ padding: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          molestie pretium dui vel volutpat. Suspendisse bibendum quam in odio
          venenatis, et iaculis mi feugiat. Donec accumsan purus dui, nec
          scelerisque nunc auctor non. Nunc feugiat, ante a auctor pretium,
          purus augue molestie mi, in fermentum nisl ligula in lorem
        </Typography>
      </div>
    </Card>
  );
}

export default function ProductDiscriptionPage() {
  const location = useLocation();
  const products = useSelector((state) => state.reducer.fetchedData);
  const dP = products.filter(
    (item, index) => item._id === location.state.id
  )[0];
  localStorage.setItem("product_data", JSON.stringify(dP));
  return (
    <div className="pD_view">
      {!location.state.id ? (
        <Navigate to="/" />
      ) : (
        <ImgMediaCard dP={JSON.parse(localStorage.getItem("product_data"))} />
      )}
    </div>
  );
}
