import React, { useState } from "react";
import { use } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddressThunk } from "../Redux/thunks/UserThunk";
// import { saveShippingAddress } from "../Redux/slices/UserSlice";

const CheckoutScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    {
      id: "3",
      street: "address3",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560001",
      country: "India",
    },
  ];

  const cart = useSelector((state) => state.cartReducer);

  const [useSavedAddress, setUseSavedAddress] = useState(
    savedAddresses[0] ? true : false
  );

  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddressThunk(address));
    navigate("/checkout");
  };

  const handleSelectedAddress = (selectedAddress) => {
    setUseSavedAddress(true);
    setAddress(selectedAddress);
  };

  const handleNewAddress = () => {
    setUseSavedAddress(false);
    setAddress({
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    });
  };

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
                  className="p-4 rounded-lg bg-white shadow-sm"
                >
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

            {savedAddresses[0] && (
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
            )}

            {
              <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Enter Address
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-2 gap-4"
                >
                  <input
                    type="text"
                    placeholder="Street"
                    className={`p-2 border border-gray-300 focus:border-0 outline-none rounded-md focus:ring focus:ring-red-300
                      ${
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
                    className={`p-2 border border-gray-300 focus:border-0 outline-none rounded-md focus:ring focus:ring-red-300
                      ${
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
                    className={`p-2 border border-gray-300 focus:border-0 outline-none rounded-md focus:ring focus:ring-red-300
                      ${
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
                    className={`p-2 border border-gray-300 focus:border-0 outline-none rounded-md focus:ring focus:ring-red-300
                      ${
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
                    className={`p-2 border border-gray-300 focus:border-0 outline-none rounded-md focus:ring focus:ring-red-300
                      ${
                        useSavedAddress ? "bg-gray-200 cursor-not-allowed" : ""
                      }`}
                    value={address.country}
                    disabled={useSavedAddress}
                    onChange={(e) =>
                      setAddress({ ...address, country: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className="col-span-1 w-full py-2 mt-4 rounded-full font-medium transition bg-red-500 text-white cursor-pointer"
                  >
                    deliver to this address
                  </button>
                </form>
              </div>
            }
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
            <button className="w-full bg-red-500 text-white py-3 mt-4 rounded-md cursor-pointer">
              Proceed to pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutScreen;
