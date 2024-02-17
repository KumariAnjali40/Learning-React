import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";
import Signup from "../component/Signup";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
};

export default AllRoute;
