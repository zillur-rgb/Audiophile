import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Speakers from "../Speakers";
import Earphones from "../Earphones/Earphones";
import Headphones from "../Headphones";
import Home from "../Home";
import Details from "../../Components/Details/Details";

const Allpages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/:category/:product" element={<Details />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link to="/">
                <button className="py-3 px-10 bg-orange text-white rounded-md hover:bg-orange-light">
                  Go back
                </button>
              </Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
};

export default Allpages;
