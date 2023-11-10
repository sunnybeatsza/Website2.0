import { createSlice } from "@reduxjs/toolkit";

// LoginSlice.js
const LoginSlice = createSlice({
  name: "LoginStaus",
  initialState: {
    isLoggedIn: false,
    userName: "",
  },

  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.userName = action.payload; // Set userName from payload
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userName = ""; // Clear userName on logout
    },
  },
});

export const { login, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
