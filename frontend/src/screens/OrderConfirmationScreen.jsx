import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { use } from "react";

const OrderConfirmationScreen = () => {
  const params = useParams();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Order Confirmed!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your order. Your delicious pizza will be delivered soon!
        </p>

        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <p className="text-lg font-semibold text-gray-700">Order Id:</p>
          <p className="text-red-500 text-xl font-bold">{params.orderId}</p>
        </div>

        <Link
          to="/"
          className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationScreen;
