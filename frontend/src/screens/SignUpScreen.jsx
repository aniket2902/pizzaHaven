import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  password: "",
  role: "ROLE_CUSTOMER",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(e.target.value);

    e.preventDefault();
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
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              label="Full Name"
              name="name"
              id="name"
              autoComplete="name"
              helperText={<ErrorMessage name="name" />}
            />
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email Address"
              name="email"
              id="email"
              autoComplete="email"
              helperText={<ErrorMessage name="email" />}
            />
            <Field
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              name="password"
              type="password"
              id="password"
              helperText={<ErrorMessage name="password" />}
            />
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

        {/* <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="name"
              id="name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-gray-600 font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-full font-medium hover:bg-red-600 transition"
          >
            Sign Up
          </button>
        </form> */}

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
