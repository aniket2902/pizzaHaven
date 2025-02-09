import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Redux/slices/CartSlice";

const PizzaCard = ({ pizza }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(pizza));
  };

  const handleCardClick = () => {
    navigate(`/pizzadetails/${pizza.id}`);
  };

  return (
    <div
      className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        className="w-full h-52 object-cover"
        src={pizza.image}
        alt={pizza.name}
      />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{pizza.name}</h3>
        <p className="text-gray-500 text-sm mt-2">{pizza.description}</p>
      </div>

      <div className="flex justify-between items-center px-5 pb-5">
        <span className="text-red-500 font-bold text-lg">₹{pizza.price}</span>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
