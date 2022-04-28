import React from "react";
import { Route, Routes } from "react-router-dom";
import Speakers from "../Speakers";
import Earphones from "../Earphones";
import Headphones from "../Headphones";
import Home from "../Home";
import Details from "../Details";

const Allpages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default Allpages;
