import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
{/*           <img src="/img/logo.png" alt="logo" className="h-10 w-auto" /> */}
          <span className="text-xl font-bold text-red-600 hidden sm:inline">Foodies</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 focus:outline-none"
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
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute top-full left-0 w-full lg:static lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition duration-300`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 py-4 lg:p-0 text-gray-800 font-medium text-md">
            <li>
              <Link to="/" className="hover:text-red-600 transition-all duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-600 transition-all duration-200">About</Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-red-600 transition-all duration-200">Menu</Link>
            </li>
            <li>
              <Link to="/chefs" className="hover:text-red-600 transition-all duration-200">Chefs</Link>
            </li>

            {/* Dropdown */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-red-600 transition-all duration-200">
                Blog
              </span>
              <ul className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white border rounded-md shadow-md z-10 w-44">
                <li>
                  <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100 transition">Blog</Link>
                </li>
                <li>
                  <Link to="/single-blog" className="block px-4 py-2 hover:bg-gray-100 transition">Single Blog</Link>
                </li>
                <li>
                  <Link to="/elements" className="block px-4 py-2 hover:bg-gray-100 transition">Elements</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className="hover:text-red-600 transition-all duration-200">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Book Table Button */}
        <div className="hidden lg:block">
          <a href="#book" className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-200 shadow-md">
            Book a Table
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
