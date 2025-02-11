import React, { useEffect, useState } from "react";
import { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddressThunk } from "../Redux/thunks/UserThunk";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useRazorpay } from "react-razorpay";
import {
  createOrderThunk,
  razorpayOrderThunk,
} from "../Redux/thunks/OrderThunk";
import { current } from "@reduxjs/toolkit";
import { clearCartItems } from "../Redux/slices/CartSlice";
import { toast } from "react-toastify";
import { BASE_URL } from "../constants";
// import { saveShippingAddress } from "../Redux/slices/UserSlice";

const CheckoutScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentOrderForRazorpay = useSelector((state) => state.orderReducer);
  const user = useSelector((state) => state.userReducer);
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = () => {
    if (!useSavedAddress) {
      toast.error("Please select an address to proceed with payment");
      return;
    }
    // dispatch(razorpayOrderThunk(cart.totalPrice));
    console.log(currentOrderForRazorpay, " current order");
    const options = {
      key: "rzp_test_mbABnIuJl5vwPf",
      amount: currentOrderForRazorpay?.currentOrder.amount,
      currency: currentOrderForRazorpay?.currentOrder.currency,
      name: "PizzaHaven",
      description: "Test Transaction",
      order_id: currentOrderForRazorpay?.id,
      handler: async (response) => {
        if (response.razorpay_payment_id) {
          dispatch(createOrderThunk(address));
          dispatch(clearCartItems());
          navigate(`/confirmation/${response.razorpay_payment_id}`);
        }
        // const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
        //   response;

        // const verificationResponse = await fetch(`${BASE_URL}/payment/verify`, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     razorpay_payment_id,
        //     razorpay_order_id,
        //     razorpay_signature,
        //   }),
        // });

        // dispatch(createOrderThunk(address));
        // if (verificationResponse.ok) {
        //   dispatch(clearCartItems());
        //   navigate(`/confirmation/${currentOrderForRazorpay.id}`);
        // } else {
        //   console.error("Payment verification failed");
        // }
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };

  // const savedAddresses = useSelector(
  //   (state) => state.userReducer.shippingAddressess || []
  // );

  const savedAddresses = [
    {
      id: "1",
      street: "address1",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560001",
      country: "India",
    },
    {
      id: "2",
      street: "address2",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560001",
      country: "India",
    },
  ];

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  // const [savedAddresses, setSavedAddresses] = useState([]);

  const cart = useSelector((state) => state.cartReducer);

  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [newAddressClicked, setNewAddressClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = { ...address };
    // setSavedAddresses((prev) => [...prev, newAddress]);
    console.log(savedAddresses);
    // dispatch(saveShippingAddres
    // sThunk(address));
    // navigate("/checkout");
  };

  const handleSelectedAddress = (selectedAddress) => {
    setUseSavedAddress(true);
    setNewAddressClicked(false);
    setAddress(selectedAddress);
  };

  const handleNewAddress = () => {
    if (savedAddresses.length >= 3) {
      toast.error(
        "You can save only 3 addresses. Please delete an existing address to add a new one."
      );
      return;
    }
    setNewAddressClicked(true);
    setUseSavedAddress(false);
    setAddress({
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
  };

  const deleteAddress = (zip) => {
    const updatedAddresses = savedAddresses.filter(
      (selectedAddress) => selectedAddress.zip !== zip
    );
    // setSavedAddresses(updatedAddresses);
  };

  useEffect(() => {
    console.log("cart ", cart);
    dispatch(razorpayOrderThunk(cart.totalPrice));
  }, [cart]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Checkout
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid grid-cols-2 gap-6 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 col-span-2">
              Select Address
            </h3>

            {savedAddresses?.length > 0 ? (
              savedAddresses.map((selectedAddress) => (
                <div
                  key={selectedAddress.id}
                  className={`relative p-4 rounded-lg bg-white shadow-sm w-full sm:w-96 ${
                    selectedAddress.id === address.id
                      ? "border-2 border-red-500"
                      : ""
                  }`}
                >
                  {/* Edit & Delete Icons at Top-Right */}
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <FiEdit
                      className="text-blue-500 cursor-pointer hover:text-blue-700"
                      size={20}
                    />
                    <FiTrash
                      onClick={deleteAddress(selectedAddress.zip)}
                      className="text-red-500 cursor-pointer hover:text-red-700"
                      size={20}
                    />
                  </div>

                  <p className="text-gray-800 font-medium">
                    {selectedAddress.street}, {selectedAddress.city}
                  </p>
                  <p className="text-gray-600">
                    {selectedAddress.state}, {selectedAddress.zip},{" "}
                    {selectedAddress.country}
                  </p>
                  <button
                    className="w-full py-2 mt-4 rounded-full font-medium bg-gray-200 text-gray-700 cursor-pointer hover:bg-gray-300"
                    onClick={() => handleSelectedAddress(selectedAddress)}
                  >
                    Use this Address
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">
                No saved addresses found. Please add a new address.
              </p>
            )}

            {
              <div className=" p-4 rounded-lg bg-white shadow-sm">
                <p className="text-gray-800 font-medium">Add New Address</p>
                <p className="text-gray-600">
                  Add a well-described address to help us deliver your order
                  correctly.
                </p>
                <button
                  className="w-full py-2 mt-4 rounded-full font-medium bg-red-500 text-white hover:bg-red-600 cursor-pointer"
                  onClick={handleNewAddress}
                >
                  Add New
                </button>
              </div>
            }

            {newAddressClicked && (
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {useSavedAddress ? "Selected Address" : "Enter Address"}
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-2 gap-4"
                >
                  <input
                    type="text"
                    placeholder="Street"
                    className={`p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300 ${
                      useSavedAddress ? "bg-gray-200 cursor-not-allowed" : ""
                    }`}
                    value={address.street}
                    disabled={useSavedAddress}
                    onChange={(e) =>
                      setAddress({ ...address, street: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className={`p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300 ${
                      useSavedAddress ? "bg-gray-200 cursor-not-allowed" : ""
                    }`}
                    value={address.city}
                    disabled={useSavedAddress}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className={`p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300 ${
                      useSavedAddress ? "bg-gray-200 cursor-not-allowed" : ""
                    }`}
                    value={address.state}
                    disabled={useSavedAddress}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className={`p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300 ${
                      useSavedAddress ? "bg-gray-200 cursor-not-allowed" : ""
                    }`}
                    value={address.zip}
                    disabled={useSavedAddress}
                    onChange={(e) =>
                      setAddress({ ...address, zip: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    className={`p-2 border border-gray-300 rounded-md focus:ring focus:ring-red-300 ${
                      useSavedAddress ? "bg-gray-200 cursor-not-allowed" : ""
                    }`}
                    value={address.country}
                    disabled={useSavedAddress}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  />

                  {/* Show Submit Button Only If A New Address is Being Added */}
                  {!useSavedAddress && (
                    <button
                      type="submit"
                      className="col-span-1 w-full py-2 mt-4 rounded-full font-medium transition bg-red-500 text-white cursor-pointer"
                    >
                      Save Address
                    </button>
                  )}
                </form>
              </div>
            )}
          </div>

          <div className=" bg-white p-6 rounded-lg shadow-lg h-fit">
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
              <div className="flex justify-between text-gray-600">
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
              </div>
            </div>
            <button
              className="w-full bg-red-500 text-white py-3 mt-4 rounded-md cursor-pointer"
              onClick={handlePayment}
            >
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
