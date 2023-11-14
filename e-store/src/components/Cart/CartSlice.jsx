// cartSlice.js

// Import createSlice function from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

// Create a slice for the "cart" state using createSlice
const cartSlice = createSlice({
  // Slice name
  name: "cart",
  // Initial state of the slice
  initialState: {
    cartItems: [], // Array to hold cart items
    shippingMethod: null, // Variable to store selected shipping method
  },
  // Reducers define how the state can be modified
  reducers: {
    // Add an item to the cart
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    // Remove an item from the cart based on its ID
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    // Set the selected shipping method
    setShippingMethod: (state, action) => {
      state.shippingMethod = action.payload;
    },
  },
});

// Export the action creators (addToCart, removeFromCart, setShippingMethod) and the reducer
export const { addToCart, removeFromCart, setShippingMethod } =
  cartSlice.actions;
export default cartSlice.reducer;
