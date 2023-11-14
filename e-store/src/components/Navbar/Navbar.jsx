// Importing React, styles, and components for the Navbar
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Login/LoginSlice";

// Navbar component definition
export const Navbar = () => {
  // Selecting state variables from the Redux store
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const name = useSelector((state) => state.login.userName);
  const cartItems = useSelector((state) => state.cart.cartItems.length);

  // Initializing useDispatch hook
  const dispatch = useDispatch();

  // Function to handle logout action
  const handleLogOut = () => {
    dispatch(logout());
  };

  // Rendering the Navbar component
  return (
    <div className="nav-bar">
      {/* Left section of the Navbar */}
      <div className="nav-left">
        <h2 className="text-light">Olympian Opulence</h2>
      </div>

      {/* Right section of the Navbar */}
      {isLoggedIn ? (
        // Displaying content for logged-in users
        <div className="nav-right">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Shop">
              <li>Shop</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
          </ul>
          {/* Logout button */}
          <Link to="/LoginSignup">
            <button onClick={handleLogOut}>Logout</button>
          </Link>
          {/* Cart button with item counter */}
          <Link to="/Cart">
            <button>
              Cart
              {cartItems > 0 && (
                <span className="cart-counter">{cartItems}</span>
              )}
            </button>
          </Link>
          {/* Displaying user name */}
          <h3>{name}</h3>
        </div>
      ) : (
        // Displaying content for users not logged in
        <div className="nav-right">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Shop">
              <li>Shop</li>
            </Link>
            <Link to="/About">
              <li>About</li>
            </Link>
          </ul>
          {/* Login button */}
          <Link to="/LoginSignup">
            <button>Login</button>
          </Link>
          {/* Cart button with item counter */}
          <Link to="/Cart">
            <button>
              Cart
              {cartItems > 0 && (
                <span className="cart-counter">{cartItems}</span>
              )}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
