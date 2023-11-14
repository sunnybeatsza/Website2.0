// Importing React, styles, formik, and components for the SignUp component
import React from "react";
import { useFormik } from "formik";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";

// Validation function for form fields
const validate = (values) => {
  const errors = {};

  // Validation for first name field
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 10) {
    errors.firstName = "Must be 10 characters or less";
  }

  // Validation for last name field
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
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

// SignUp component definition
const SignUp = () => {
  // Initializing state for login status and user name
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");

  // Initializing useFormik hook for form management
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      // Displaying form values on submission
      alert(JSON.stringify(values, null, 2));
      alert("Sign up success!");

      // Updating state after successful signup
      setLoggedIn(true);
      setName(`${values.firstName}`);
    },
  });

  // Rendering the SignUp component
  return (
    <div>
      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        // Displaying content for logged-in users
        <div>
          <Navbar />
          <h2>Welcome, {name}</h2>
        </div>
      ) : (
        // Displaying content for users not logged in
        <div>
          <Navbar />
          <h1 className="text-light">Sign Up</h1>
          {/* Form for user signup */}
          <form onSubmit={formik.handleSubmit} className="text-light">
            {/* First Name input field */}
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            {/* Last Name input field */}
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
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
            <button type="submit">Sign up</button>
            {/* Link to login page for existing users */}
            <Link to="/LoginSignUp">Already have an account? Login</Link>
          </form>
        </div>
      )}
    </div>
  );
};

// Exporting the SignUp component as the default export
export default SignUp;
