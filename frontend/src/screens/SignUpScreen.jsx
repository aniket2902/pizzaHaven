import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import { registerUserThunk } from "../Redux/thunks/AuthThunk";

import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  status: true,
  phoneNumber: "1234567890",
  role: "ROLE_CUSTOMER",
};

const validationSchema = Yup.object({
  name: Yup.string().required(" Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUpScreen = () => {
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    values.status = true;
    values.role = "ROLE_CUSTOMER";

    console.log(values);

    dispatch(registerUserThunk({ userData: values, navigate }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Sign Up
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name
              </label>
              <Field
                name="name"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
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
              Sign Up
            </button>
          </Form>
        </Formik>
        <div className="mt-4 text-center text-gray-600">
          <span>Already have an account? </span>
          <Link to="/signin" className="text-red-500 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;
