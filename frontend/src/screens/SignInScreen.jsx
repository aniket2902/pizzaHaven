import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUserThunk } from "../Redux/thunks/AuthThunk";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignInScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(loginUserThunk({ data: values, navigate }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Sign In
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email Address
              </label>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 font-medium"
              >
                Password
              </label>
              <Field
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-full font-medium hover:bg-red-600 transition"
            >
              Sign In
            </button>
          </Form>
        </Formik>
        <div className="mt-4 text-center text-gray-600">
          <span>Don't have an account? </span>
          <Link to="/signup" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </div>
        <div className="flex justify-between items-start">
          <Link to="/forgot-password" className="text-red-500 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
