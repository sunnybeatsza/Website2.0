import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-left">
        <h2>The Style Club</h2>
      </div>
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
            Cart <span>0</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
