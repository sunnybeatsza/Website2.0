import React from "react";
import { useFormik } from "formik";
import "./Login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./LoginSlice";
import { useState } from "react";

const validate = (values) => {
  const errors = {};
  if (!values.Username) {
    errors.Username = "Required";
  } else if (values.Username.length > 8) {
    errors.Username = "Must be 8 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

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

const Login = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const name = useSelector((state) => state.login.userName);

  const handleLoginToggle = () => {
    dispatch(login(formik.values.Username)); // Pass the username as payload
  };
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      Username: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      alert("Login success!");
      handleLoginToggle();
    },
  });
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {name}</h2>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={formik.handleSubmit}>
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
            <button type="submit">Login</button>
            <Link to="/SignUp">
              <button>Sign up</button>
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
