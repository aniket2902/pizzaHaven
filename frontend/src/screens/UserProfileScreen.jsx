import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  const userDetails = {};

  const data = useSelector((state) => state.userReducer.user);

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-24 px-6">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 flex space-x-8">
        {/* Profile Details Section */}
        <div className="w-1/3">
          <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
            Your Profile
          </h2>

          <div className="space-y-6 mb-8">
            {/* Name */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={userDetails?.name}
                // onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userDetails?.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={userDetails?.address}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
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
