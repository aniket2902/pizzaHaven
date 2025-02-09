import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const orders = [
  {
    id: 1,
    date: "2025-01-20",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 12.99 },
      { name: "Pepperoni Pizza", quantity: 1, price: 14.99 },
    ],
  },
  {
    id: 2,
    date: "2025-01-15",
    items: [
      { name: "Veggie Pizza", quantity: 1, price: 10.99 },
      { name: "Garlic Bread", quantity: 2, price: 4.99 },
    ],
  },
];

const UserProfileScreen = () => {
  const dispatch = useDispatch();
  //const user = useSelector((state) => state.user?.user);
  let user = useSelector((state) => state.userReducer);
  console.log("ProfileScreen",user);
  
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        email: user.email || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const userDetails = {};

  // const data = useSelector((state) => state.userReducer.user);

  // useEffect(() => {}, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Updated Profile:", values);

    // Simulating API Call
    setTimeout(() => {
      alert("Profile updated successfully!");
      setSubmitting(false);
    }, 1000);
  };

  const handleSave = async () => {
    try {
      dispatch(getUserRequest());
      const { data } = await axios.put(
        "http://localhost:8080/user/update",
        profile,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
        }
      );
      dispatch(getUserSuccess(data));
      alert("Profile updated successfully!");
    } catch (error) {
      dispatch(getUserFailure(error.response?.data?.message || error.message));
      alert("Error updating profile!");
    }
  };

  const calculateOrderTotal = (items) => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const initialValues = {
    name: user?.name || "",
    street: user?.address?.street || "",
    city: user?.address?.city || "",
    state: user?.address?.state || "",
    zipcode: user?.address?.zipcode || "",
    country: user?.address?.country || "",
    building: user?.address?.building || "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    street: Yup.string().required("Street is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipcode: Yup.string()
      .matches(/^\d{5}$/, "Zipcode must be 5 digits")
      .required("Zipcode is required"),
    country: Yup.string().required("Country is required"),
    building: Yup.string().required("Building/Room No. is required"),
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-24 px-6">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 flex space-x-8">
        {/* Profile Details Section */}
        <div className="w-1/3">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
        Your Profile
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Full Name
            </label>
            <Field
              name="name"
              id="name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
          </div>

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

            {/* Building/Room No. */}
            <div className="mt-3">
              <label htmlFor="building" className="block text-gray-600 font-medium">
                Building/Room No.
              </label>
              <Field
                name="building"
                id="building"
                placeholder="Enter building/room no."
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <ErrorMessage name="building" component="div" className="text-red-500 text-sm mt-1" />
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </Formik>
    </div>
        {/* Orders Section */}
        <div className="w-2/3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Your Orders
          </h3>

          {orders.length === 0 ? (
            <p className="text-gray-600">You haven't placed any orders yet.</p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-md"
                >
                  <h4 className="text-xl font-semibold text-gray-700">
                    Order #{order.id}
                  </h4>
                  <p className="text-sm text-gray-500">Date: {order.date}</p>

                  <div className="space-y-2 mt-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{item.name}</span>
                        <span className="text-gray-600">
                          {item.quantity} x ₹{item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between mt-4">
                    <p className="font-semibold text-gray-800">
                      Total: ₹{calculateOrderTotal(order.items).toFixed(2)}
                    </p>
                    <button className="text-red-500 hover:text-red-600">
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileScreen;
