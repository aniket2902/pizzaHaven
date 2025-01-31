import React from "react";

const PizzaCard = ({ image, name, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600">{description}</p>
        <p className="text-red-500 font-bold mt-2">{price}</p>
      </div>
    </div>
  );
};

export default PizzaCard;
