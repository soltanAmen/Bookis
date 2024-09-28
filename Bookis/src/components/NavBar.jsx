import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../context/CartContext";
import Login from "./Login";
import SignUp from "./SignUp";
import SideBar from "./SideBar";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [toggeleMenu, setToggeleMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const { cartCount } = useContext(CartContext);

  return (
    <div className="w-full flex flex-col">
      <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center max-md:px-4 relative w-full">
        <div className="text-3xl max-md:text-2xl  uppercase font-bold text-gray-800">
          <Link to="/" className="hover:text-accent">
            Bookis
          </Link>
        </div>

        <div className="hidden lg:flex space-x-8">
          <Link to="/categories" className="text-gray-600 hover:text-accent">
            Categories
          </Link>
          <Link to="/bestsellers" className="text-gray-600 hover:text-accent">
            Bestsellers
          </Link>
          <Link to="/new-arrivals" className="text-gray-600 hover:text-accent">
            New Arrivals
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-accent">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="relative max-md:hidden">
            <input
              type="text"
              placeholder="Search for books"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-accent">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <button
            className={`text-gray-600 hover:text-accent md:hidden`}
            onClick={() => setShowSearch(!showSearch)}
          >
            <FontAwesomeIcon
              icon={faSearch}
              className={`${showSearch ? "hidden" : ""}`}
            />
            <FontAwesomeIcon
              icon={faX}
              className={`${showSearch ? "" : "hidden"}`}
            />
          </button>

          <Link to="/account" className="text-gray-600 hover:text-accent">
            <FontAwesomeIcon icon={faUser} onClick={() => setShowLogin(true)} />
          </Link>

          <Link
            to="/book-cart"
            className="text-gray-600 hover:text-accent relative"
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="absolute -top-2 -right-3 bg-accent text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          <button
            className="text-gray-600 hover:text-accent hidden max-lg:block"
            onClick={() => setToggeleMenu(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {showLogin && (
          <Login
            onClose={() => {
              setShowLogin(false);
            }}
            setShowSignUp={setShowSignUp}
            setShowLogin={setShowLogin}
            showLogin={showLogin}
          />
        )}
        {showSignUp && (
          <SignUp
            onClose={() => {
              setShowSignUp(false);
            }}
            setShowSignUp={setShowSignUp}
            setShowLogin={setShowLogin}
            showSignUp={showSignUp}
          />
        )}
      </nav>

      <div
        className={`${
          showSearch ? "w-full opacity-100" : "w-0 opacity-0"
        } absolute md:hidden top-16 left-0 flex items-center z-20 justify-center gap-4 p-4 transition-all duration-300 ease-in-out bg-white shadow-md`}
      >
        <input
          type="text"
          placeholder="Search for books"
          className="border border-gray-300 w-3/4 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button className="bg-accent text-white rounded-full px-4 py-2 flex items-center">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      {toggeleMenu && (
        <SideBar setToggeleMenu={setToggeleMenu} toggeleMenu={toggeleMenu} />
      )}
    </div>
  );
};

export default Navbar;
