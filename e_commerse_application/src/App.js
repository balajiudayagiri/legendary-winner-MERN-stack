// import "./App.css";
import Footer from "./components/webPage/Footer";
import Header from "./components/webPage/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/webPage/body/Home";
import About from "./components/webPage/body/About";
import ContactUs from "./components/webPage/body/ContactUs";
import Products from "./components/webPage/body/Products";
import LoginOrRegister from "./components/webPage/body/LoginOrRegister";

function App() {
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
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
