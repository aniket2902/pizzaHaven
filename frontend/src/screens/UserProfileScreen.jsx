import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const UserProfileScreen = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  let userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData, "From UserProfile");
  user.name = userData.name;
  user.email = userData.email;
  user.phoneNumber = userData.phoneNumber;

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    axios
      .get("http://localhost:5000/user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    // password: Yup.string()
    //     .min(8, "Password must be at least 8 characters")
    //     .required("Password is required"),
  });

  const handleSaveChanges = (values) => {
    console.log("Handebshbfhsvh", values);
    userData.name = values.name;
    userData.email = values.email;
    userData.phoneNumber = values.phoneNumber;
    console.log("HandleSaveChanges", userData);

    localStorage.removeItem("userData");
    localStorage.setItem("userData", JSON.stringify(userData));
    const token = localStorage.getItem("jwt");
    axios
      .put("http://localhost:8080/api/user/updateUser", values, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        alert("User details updated successfully");
      })
      .catch((error) => console.error("Error updating user details:", error));
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          User Profile
        </h2>
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={handleSaveChanges}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name
              </label>
              <Field
                name="name"
                id="name"
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
                disabled
                className="w-full border border-gray-300 rounded-full px-4 py-2 bg-gray-200 cursor-not-allowed"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-600 font-medium"
              >
                Phone Number
              </label>
              <Field
                name="phoneNumber"
                id="phoneNumber"
                className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-full font-medium hover:bg-red-600 transition"
            >
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UserProfileScreen;
