import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
