import React from "react";

const PizzaCard = ({ image, name, description, price }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden">
      <img className="w-full h-52 object-cover" src={image} alt={name} />

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>

      <div className="flex justify-between items-center px-5 pb-5">
        <span className="text-red-500 font-bold text-lg">₹{price}</span>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-full transition">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default PizzaCard;
