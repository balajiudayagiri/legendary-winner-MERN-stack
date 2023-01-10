import Footer from "./webPage/Footer";
import Header from "./webPage/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./webPage/body/Home";
import About from "./webPage/body/About";
import ContactUs from "./webPage/body/ContactUs";
import Products from "./webPage/body/Products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SecureRoute from "./webPage/SecureAndNonSecureRouting/SecureRoute";
import NonSecuredRouter from "./webPage/SecureAndNonSecureRouting/NonSecuredRouter";
import SignIn from "./webPage/body/LoginOrRegister/SignIn";
import SignUp from "./webPage/body/LoginOrRegister/SignUp";
import { getProducts } from "./services/API";
import { Typography } from "@mui/material";
import Root from "./webPage/body/StatusList/Root";
import ProductDiscriptionPage from "./webPage/body/ProductDiscriptionPage";
import CartPage from "./webPage/body/cart/CartPage";

// import "./components/webPage/body/ContactUsMUI/TabsVertical.css";

function AwesomeStoreMain() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts()
      .then((res) => res.json())
      .then((res) => dispatch({ type: "fetch_get", payload: res }));
  });
  return (
    <BrowserRouter>
      <Header />
      <div id="body_contains">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Root />} />
          <Route path="/about" element={<About />} />
          <Route element={<SecureRoute />}>
            <Route path="/products" element={<Products />} />
            <Route
              path="/productDescription"
              element={<ProductDiscriptionPage />}
            />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route element={<NonSecuredRouter />}>
            <Route element={<SignIn />} path="/sign-in" />
            <Route element={<SignUp />} path="/sign-up" />
          </Route>
          <Route
            path="*"
            element={
              <Typography variant="h1" component="h2">
                404 Page Not Found
              </Typography>
            }
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default AwesomeStoreMain;
