import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Login/LoginSlice";

export const Navbar = () => {
  // Navbar.js
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <h2>The Style Club</h2>
      </div>
      {isLoggedIn ? (
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
          <Link to="/LoginSignup">
            <button>Logout</button>
          </Link>
          <Link to="/Cart">
            <button>
              Cart <span>{<itemsCount />}</span>
            </button>
          </Link>
        </div>
      ) : (
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
          <Link to="/LoginSignup">
            <button>Login</button>
          </Link>
          <Link to="/Cart">
            <button>
              Cart <span>{<itemsCount />}</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
