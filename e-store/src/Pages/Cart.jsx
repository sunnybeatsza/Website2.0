// Cart.js

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
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleShippingMethodChange = (method) => {
    dispatch(setShippingMethod(method));
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ${item.price}
          </p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <p>Total: ${calculateTotal()}</p>

      <h3>Choose Shipping Method:</h3>
      <label>
        Standard Shipping
        <input
          type="radio"
          value="standard"
          checked={shippingMethod === "standard"}
          onChange={() => handleShippingMethodChange("standard")}
        />
      </label>
      <label>
        Express Shipping
        <input
          type="radio"
          value="express"
          checked={shippingMethod === "express"}
          onChange={() => handleShippingMethodChange("express")}
        />
      </label>
    </div>
  );
};

export default Cart;
