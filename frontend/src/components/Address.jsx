import React from "react";
import xor from "./../../node_modules/lodash-es/xor";
import { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string().matches(/^\d{5}$/, "Invalid Zipcode").required("Zipcode is required"),
    country: Yup.string().required("Country is required"),
  });
const Address = () => {

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        axios
          .get("http://localhost:5000/addresses", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setAddresses(response.data))
          .catch((error) => console.error("Error fetching addresses:", error));
      }, []);
    
    const handleAddressClick = (address) => {
        setSelectedAddress(address);
        setAddressOpen(true);
      };

      const handleSaveChanges = (values) => {
        const token = localStorage.getItem("jwt");
        axios
          .put(`http://localhost:5000/addresses/${values.id}`, values, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setAddresses((prevAddresses) =>
              prevAddresses.map((addr) => (addr.id === values.id ? response.data : addr))
            );
            setAddressOpen(false);
          })
          .catch((error) => console.error("Error updating address:", error));
      };
    const [addresses, setAddresses] = useState([
        {
          "id": 1,
          "name": "John Doe",
          "street": "123 Main Street",
          "city": "New York",
          "state": "NY",
          "zipcode": "10001",
          "country": "USA",
          "building": "Apt 4B"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "street": "456 Elm Street",
          "city": "Los Angeles",
          "state": "CA",
          "zipcode": "90001",
          "country": "USA",
          "building": "Suite 10"
        },
        {
          "id": 3,
          "name": "Michael Johnson",
          "street": "789 Pine Avenue",
          "city": "Chicago",
          "state": "IL",
          "zipcode": "60601",
          "country": "USA",
          "building": "Floor 3"
        }
      ]
      );
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressOpen, setAddressOpen] = useState(false);

    

  return (
    <div className="p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {addresses.map((address) => (
      <div
        key={address.id}
        className="bg-white p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition"
        onClick={() => handleAddressClick(address)}
      >
        <h2 className="text-lg font-semibold mt-2">{address.name}</h2>
        <p className="text-sm text-gray-500">{address.street}, {address.city}</p>
      </div>
    ))}

    {/* Address Edit Modal */}
    {addressOpen && selectedAddress && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-bold">Edit Address</h2>
          <Formik
            initialValues={selectedAddress}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Updated Address:", values);
              setAddressOpen(false);
            }}
          >
            {({ isValid }) => (<Form className="space-y-6">
              {/* Address Fields */}
              <div className="border border-gray-300 p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>

                {/* Street */}
                <div className="mb-3">
                  <label htmlFor="street" className="block text-gray-600 font-medium">
                    Street
                  </label>
                  <Field
                    name="street"
                    id="street"
                    placeholder="Enter street"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <ErrorMessage name="street" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                {/* City & State */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-gray-600 font-medium">
                      City
                    </label>
                    <Field
                      name="city"
                      id="city"
                      placeholder="Enter city"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-600 font-medium">
                      State
                    </label>
                    <Field
                      name="state"
                      id="state"
                      placeholder="Enter state"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                {/* Zipcode & Country */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="zipcode" className="block text-gray-600 font-medium">
                      Zipcode
                    </label>
                    <Field
                      name="zipcode"
                      id="zipcode"
                      placeholder="Enter zipcode"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <ErrorMessage name="zipcode" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-gray-600 font-medium">
                      Country
                    </label>
                    <Field
                      name="country"
                      id="country"
                      placeholder="Enter country"
                      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <ErrorMessage name="country" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-500 transition"
                  onClick={() => setAddressOpen(false)}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className={`px-6 py-2 rounded-full font-medium transition ${isValid ? "bg-red-500 text-white hover:bg-red-600" : "bg-gray-300 text-gray-600 cursor-not-allowed"}`}
                  disabled={!isValid}
                >
                  Save Changes
                </button>
              </div>
            </Form>
            )}
          </Formik>
        </div>
      </div>
    )}
  </div>
  );
};

export default Address;
