import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-orange-500 hidden sm:inline animate-pulse">Foodies</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none transition-transform duration-200 hover:scale-110"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block animate-slideDown" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute top-full left-0 w-full lg:static lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-4 lg:p-0 text-gray-800 font-medium text-md">
            {["Home", "About", "Menu", "Chefs", "Blog", "Element", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="relative group transition duration-300"
                >
                  <span className="hover:text-orange-500 transition duration-200">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Table Button */}
        <div className="hidden lg:block">
          <a
            href="#book"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 duration-200 shadow-md"
          >
            Book a Table
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
