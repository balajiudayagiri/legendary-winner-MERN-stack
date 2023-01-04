import Footer from "./components/webPage/Footer";
import Header from "./components/webPage/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/webPage/body/Home";
import About from "./components/webPage/body/About";
import ContactUs from "./components/webPage/body/ContactUs";
import Products from "./components/webPage/body/Products";
import LoginOrRegister from "./components/webPage/body/LoginOrRegister";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import SecureRoute from "./components/webPage/SecureAndNonSecureRouting/SecureRoute";
import SignIn from "./components/webPage/body/LoginOrRegister/SignIn";
import SignUp from "./components/webPage/body/LoginOrRegister/SignUp";
import { getProducts } from "./components/services/API";

// import "./components/webPage/body/ContactUsMUI/TabsVertical.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts("/products")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "fetch_get", payload: res }));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <div id="body_contains">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login-or-registration" element={<LoginOrRegister />} />
          <Route element={<SecureRoute />}>
            <Route element={<SignIn />} path="/login-or-registration/sign-in" />
            <Route element={<SignUp />} path="/login-or-registration/sign-up" />
          </Route>
          <Route path="*" element={<h1>Error 404, Failed</h1>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
