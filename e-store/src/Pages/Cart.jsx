// Cart.js
import "../Components/Cart/Cart.css";
import Popup from "../Components/Modal/Modal";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  setShippingMethod,
} from "../Components/Cart/CartSlice";
import { Navbar } from "../Components/Navbar/Navbar";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingMethod = useSelector((state) => state.cart.shippingMethod);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    const baseTotal = cartItems.reduce((total, item) => total + item.price, 0);

    // Add shipping costs based on the selected method
    const shippingCost = shippingMethod === "express" ? 200 : 150;

    return baseTotal + shippingCost;
  };

  const handleShippingMethodChange = (method) => {
    dispatch(setShippingMethod(method));
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="outer-container">
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.title} - ${item.price}
              </p>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="btn btn-primary"
              >
                Remove
              </button>
            </div>
          ))}
          <p>Total: ${calculateTotal()}</p>
        </div>

        <div className="billing-info">
          <h3>Shipping Method:</h3>
          <label>
            Shipping +$200.00
            <input
              type="radio"
              value="standard"
              checked={shippingMethod === "standard"}
              onChange={() => handleShippingMethodChange("standard")}
            />
          </label>
          <label>
            Express +$150.00
            <input
              type="radio"
              value="express"
              checked={shippingMethod === "express"}
              onChange={() => handleShippingMethodChange("express")}
            />
          </label>
          <Popup />
        </div>
      </div>
    </div>
  );
};

export default Cart;
