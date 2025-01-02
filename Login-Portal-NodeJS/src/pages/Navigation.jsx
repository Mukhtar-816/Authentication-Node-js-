import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Portal";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

const Navigation = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Portal/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
};

export default Navigation;
