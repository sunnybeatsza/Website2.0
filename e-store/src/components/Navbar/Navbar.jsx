import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Login/LoginSlice";

export const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const name = useSelector((state) => state.login.userName);
  const cartItems = useSelector((state) => state.cart.cartItems.length);

  const handleLogOut = () => {
    dispatch(logout());
  };

  const dispatch = useDispatch();

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <h2>New Wave</h2>
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
            <Link to="/Landing">
              <li>Join</li>
            </Link>
          </ul>
          <Link to="/LoginSignup">
            <button onClick={handleLogOut}>Logout</button>
          </Link>
          <Link to="/Cart">
            <button>
              Cart
              {cartItems > 0 && (
                <span className="cart-counter">{cartItems}</span>
              )}
            </button>
          </Link>
          <h3>{name}</h3>
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
            <Link to="/Landing">
              <li>Join</li>
            </Link>
          </ul>
          <Link to="/LoginSignup">
            <button>Login</button>
          </Link>
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
