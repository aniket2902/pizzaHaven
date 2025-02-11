import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../Redux/slices/CartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer);

  const totalQuantity = cart?.cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const handleRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Your Cart
        </h2>

        {cart?.cartItems.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="text-red-500 hover:underline">
              Go to Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cart Items
              </h3>
              <div className="space-y-6">
                {cart?.cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-4 border-b border-gray-300"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div>
                        <p className="text-lg font-medium text-gray-800">
                          {item?.name}
                        </p>
                        <p className="text-gray-600">Price: ₹{item?.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-gray-600">Qty: {item?.quantity}</p>
                      <button
                        className="text-red-500 hover:text-red-600 cursor-pointer"
                        onClick={() => handleRemoveCartItem(item?.id)}
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="border-b pb-4">
                {cart.cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between mb-2">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <div className="flex justify-between font-medium">
                  <span>Subtotal:</span>
                  <span>₹{cart.itemsPrice}</span>
                </div>
                {/* <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>₹{cart.taxPrice}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>₹{cart.shippingPrice}</span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>Total:</span>
                  <span>₹{cart.totalPrice}</span>
                </div> */}
              </div>
              <button
                className="w-full bg-red-500 text-white py-3 mt-4 rounded-md cursor-pointer"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
