import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineShoppingCart, HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
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
    <div>
      <div className="py-8 flex items-center container mx-auto justify-between">
        <div className="logo">
          <h1 className="text-white font-black text-3xl">audiophile</h1>
        </div>

        <ul className="navbar hidden sm:flex">
          {menus.map((menu, idx) => (
            <Link to={menu.url} key={idx}>
              <li
                className={`nav text-white font-semibold normal-case md:uppercase mx-7 xl:mx-28 l:mx-10 first:ml-0 hover:text-orange ${
                  routeMatchPath(menu.url) ? "text-orange" : "text-white"
                }`}
              >
                {menu.display}
              </li>
            </Link>
          ))}
        </ul>

        <div className="rightMost flex">
          <div className="cart text-white  mr-5 text-2xl">
            <HiOutlineShoppingCart />
          </div>

          <div className="hamburger text-white text-2xl mr-5 block sm:hidden cursor-pointer">
            <HiMenuAlt3
              onClick={() => {
                setShowNavMenu(!showNavMenu);
              }}
            />
          </div>
        </div>
      </div>
      {showNavMenu && (
        <ul className="navbar container flex-col flex sm:hidden text-center absolute mx-auto bg-black z-1000">
          {menus.map((menu, idx) => (
            <Link to={menu.url} key={idx}>
              <li
                className={`nav text-white py-6 font-semibold uppercase hover:text-orange ${
                  routeMatchPath(menu.url) ? "text-orange" : "text-white"
                }`}
              >
                {menu.display}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
