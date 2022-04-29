import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const routeMatchPath = (route) => {
    if (location.pathname === route) {
      return true;
    }
  };
  const menus = [
    {
      display: "Home",
      url: "/",
    },
    {
      display: "Headphones",
      url: "/headphones",
    },
    {
      display: "Earphones",
      url: "/earphones",
    },
    {
      display: "Speakers",
      url: "/speakers",
    },
  ];
  return (
    <div className=" bg-black w-screen mt-32">
      <div className="container mx-auto w-5/6 lg:max-w-7xl flex flex-col md:flex-row py-6 ">
        <div className="left w-full md:w-1/2 mr-12">
          <Link to="/">
            <h1 className="text-white font-black text-3xl md:text-left text-center">
              audiophile
            </h1>
          </Link>
          <p className="my-12 text-text text-center md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - were open 7 days a week.
          </p>
          <p className="text-text text-center md:text-left">
            Copyright 2021. MD Zillur Rahman. All Rights Reserved
          </p>
        </div>

        <div className="right w-full md:w-1/2 flex flex-col mt-4 items-center md:items-end ml-0 md:ml-12">
          <ul className="navbar flex mb-12">
            {menus.map((menu, idx) => (
              <Link to={menu.url} key={idx}>
                <li
                  className={`nav text-white font-semibold normal-case md:uppercase text-md pl-4 md:pl-8 first:ml-0 hover:text-orange ${
                    routeMatchPath(menu.url) ? "text-orange" : "text-white"
                  }`}
                >
                  {menu.display}
                </li>
              </Link>
            ))}
          </ul>
          <div className="socialIcon flex text-3xl text-white cursor-pointer">
            <FaFacebookSquare className="mr-2" />
            <FaTwitterSquare className="mr-2" />
            <FaInstagramSquare className="mr-2" />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
