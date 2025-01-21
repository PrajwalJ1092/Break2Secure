import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 navbar">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer navbar-logo">
          <img
            src="public/Images/logo5.png"
            className="h-12 object-contain mix-blend-multiply"
            alt="Logo"
          />
        </div>

        <ul className="hidden lg:flex space-x-12 items-center">
          {["Home", "About Us", "Services", "Contact"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer text-[#2B786D] font-medium hover:text-[#abede3] transition duration-300"
            >
              {isHomePage ? (
                <ScrollLink
                  to={item.toLowerCase().replace(" ", "-")}
                  smooth={true}
                  duration={800}
                  offset={-70}
                >
                  {item}
                </ScrollLink>
              ) : (
                <Link to={`/#${item.toLowerCase().replace(" ", "-")}`}>
                  {item}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/contact-form"
          className="hidden lg:block text-[#2B786D] p-3 font-semibold rounded-lg border border-[#2B786D] text-base hover:bg-[#2B786D] hover:text-white transition  duration-300"
        >
          Get a Quote →
        </Link>

        <div className="lg:hidden flex relative items-center">
          <button className="menu-icon" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              {["Home", "About Us", "Services", "Contact"].map((item, index) => (
                <li key={index} onClick={toggleMenu}>
                  {isHomePage ? (
                    <ScrollLink
                      to={item.toLowerCase().replace(" ", "-")}
                      smooth={true}
                      duration={500}
                      offset={-70}
                    >
                      {item}
                    </ScrollLink>
                  ) : (
                    <Link to={`/#${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              to="/contact-form"
              className="w-full mt-4 text-[#2B786D] p-3 text-center rounded-lg border border-[#2B786D] text-lg hover:bg-[#2B786D] hover:text-white transition duration-300"
              onClick={toggleMenu}
            >
              Get a Quote →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
