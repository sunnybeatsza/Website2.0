// Import necessary libraries and styles for the Login component
import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./LoginSlice";
import { useState } from "react";

// Validation function for form fields
const validate = (values) => {
  const errors = {};
  // Validation for Username field
  if (!values.Username) {
    errors.Username = "Required";
  } else if (values.Username.length > 8) {
    errors.Username = "Must be 8 characters or less";
  }

  // Validation for email field
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Validation for password field
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = "Must have 1 uppercase letter";
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = "Must have 1 lowercase letter";
  } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(values.password)) {
    errors.password = "Must have at least 1 special character";
  }

  return errors;
};

// Login component definition
const Login = () => {
  // Selecting state variables from the Redux store
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const name = useSelector((state) => state.login.userName);

  // Function to toggle login status and dispatching login action
  const handleLoginToggle = () => {
    dispatch(login(formik.values.Username)); // Pass the username as payload
  };

  // Initializing useDispatch hook
  const dispatch = useDispatch();

  // Initializing useFormik hook for form management
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      Username: "",
    },
    validate,
    onSubmit: (values) => {
      // Displaying form values on submission
      alert(JSON.stringify(values, null, 2));
      alert("Login success!");
      handleLoginToggle();
    },
  });

  // Rendering the Login component
  return (
    <div>
      {isLoggedIn ? (
        // Displaying welcome message if user is logged in
        <h2>Welcome, {name}</h2>
      ) : (
        // Displaying login form if user is not logged in
        <div>
          <h2>Login</h2>
          <form onSubmit={formik.handleSubmit}>
            {/* Username input field */}
            <label htmlFor="Username">Username</label>
            <input
              id="Username"
              name="Username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Username}
            />
            {formik.errors.Username ? (
              <div>{formik.errors.Username}</div>
            ) : null}
            {/* Email input field */}
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            {/* Password input field */}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            {/* Submit button */}
            <button type="submit">Login</button>
            {/* Link to SignUp page */}
            <Link to="/SignUp">
              <button>Sign up</button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

// Exporting the Login component as the default export
export default Login;
