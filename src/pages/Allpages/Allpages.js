import React from "react";
import { Route, Routes } from "react-router-dom";
import Speakers from "../Speakers";
import Earphones from "../Earphones";
import Headphones from "../Headphones";
import Home from "../Home";

const Allpages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/earhones" element={<Earphones />} />
      <Route path="/speakers" element={<Speakers />} />
    </Routes>
  );
};

export default Allpages;
