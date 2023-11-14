// Importing styles, components, and state management tools for the Cart component
import "../Components/Cart/Cart.css";
import Popup from "../Components/Modal/Modal";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  setShippingMethod,
} from "../Components/Cart/CartSlice";
import { Navbar } from "../Components/Navbar/Navbar";

// Cart component definition
const Cart = () => {
  // Selecting state variables from the Redux store
  const cartItems = useSelector((state) => state.cart.cartItems);
  const shippingMethod = useSelector((state) => state.cart.shippingMethod);
  const dispatch = useDispatch();

  // Function to calculate the total cost of items in the cart
  const calculateTotal = () => {
    // Calculate the base total by summing up item prices in the cart
    const baseTotal = cartItems.reduce((total, item) => total + item.price, 0);

    // Add shipping costs based on the selected shipping method
    const shippingCost = shippingMethod === "express" ? 200 : 150;

    return baseTotal + shippingCost;
  };

  // Function to handle changes in the shipping method
  const handleShippingMethodChange = (method) => {
    dispatch(setShippingMethod(method));
  };

  // Rendering the Cart component
  return (
    <div>
      {/* Navbar component */}
      <div>
        <Navbar />
      </div>
      {/* Outer container for the cart and billing information */}
      <div className="outer-container">
        {/* Cart container */}
        <div className="cart-container">
          <h2>Your Cart</h2>
          {/* Mapping through cart items and displaying them with remove button */}
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
          {/* Displaying the total cost of items in the cart */}
          <p>Total: ${calculateTotal()}</p>
        </div>

        {/* Billing information container */}
        <div className="billing-info">
          <h3>Shipping Method:</h3>
          {/* Radio buttons for selecting the shipping method */}
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
          {/* Popup component for additional information */}
          <Popup />
        </div>
      </div>
    </div>
  );
};

// Exporting the Cart component as the default export
export default Cart;
