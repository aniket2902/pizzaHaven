import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const CartScreen = () => {
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
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      {" "}
      {/* Added pt-24 */}
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="text-red-500 hover:underline">
              Go to Menu
            </Link>
          </div>
        ) : (
          <div>
            <div className="space-y-6">
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
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                    <button className="text-red-500 hover:text-red-600">
                      <FaTrashAlt size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-between items-center">
              <p className="text-xl font-bold text-gray-800">
                Total: ₹{calculateTotal().toFixed(2)}
              </p>
              <div>
                <Link
                  to="/checkout"
                  className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
