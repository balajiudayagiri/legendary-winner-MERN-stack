import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import LoginRegister from "./LoginRegister";

export default function FakeStore() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login-register" element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
