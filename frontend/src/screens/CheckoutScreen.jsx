import React from "react";
import { Link } from "react-router-dom";

const CheckoutScreen = () => {
  const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      quantity: 2,
      price: 12.99,
      image: "/images/margherita.jpg",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      quantity: 1,
      price: 14.99,
      image: "/images/pepperoni.jpg",
    },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 pt-24 px-6">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Checkout
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cart Items Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Your Order
            </h3>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b border-gray-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-gray-600">
                      Price: ₹{item.price.toFixed(2)}
                    </p>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-gray-600 font-medium">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Shipping and Payment Section */}
          <div className="space-y-6">
            {/* Shipping Details */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Shipping Details
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="1234 Main St, Apt 1"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Payment Method
              </h3>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9876 5432"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-8 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800">
            Total: ₹{calculateTotal().toFixed(2)}
          </p>
          <div>
            <Link
              to="/confirmation"
              className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
            >
              Complete Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
