import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartThunk } from "../Redux/thunks/CartThunk";

const PizzaCard = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState("MEDIUM");
  const [price, setPrice] = useState(
    pizza.itemSizes.find((size) => size.size === selectedSize)?.price
  );

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    dispatch(addToCartThunk({ ...pizza, size: selectedSize, price }));
  };

  const handleSizeChange = (e) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    setPrice(pizza.itemSizes.find((size) => size.size === newSize).price);
  };

  const handleCardClick = () => {
    navigate(`/pizzadetails/${pizza.id}`);
  };

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden">
      <img
        className="w-full h-52 object-cover cursor-pointer"
        src={`data:image/png;base64,${pizza.imageUrl}`}
        alt={pizza?.name}
        onClick={handleCardClick}
      />

      <div className="p-5">
        <div className=" font-semibold text-gray-800 flex items-center justify-between gap-2">
          <h3 className="text-lg">{pizza?.name}</h3>
          <select
            className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-300 outline-none"
            value={selectedSize}
            onChange={handleSizeChange}
          >
            {pizza?.itemSizes.map((size) => (
              <option key={size.size} value={size.size}>
                {size.size}
              </option>
            ))}
          </select>
        </div>

        <p className="text-gray-500 text-sm mt-2">{pizza?.description}</p>
      </div>

      <div className="flex justify-between items-center px-5 pb-5 mt-4">
        <span className="text-red-500 font-bold text-lg">₹{price}</span>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition cursor-pointer"
          onClick={() => handleAddToCart(pizza, selectedSize)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
