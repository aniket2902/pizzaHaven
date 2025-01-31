import React from "react";
import { Link } from "react-router-dom";
import pizzaImage from "../assets/mixed-pizza-with-various-ingridients.jpg";

const PizzaDetailsScreen = () => {
  const pizza = {
    id: 1,
    name: "Margherita Pizza",
    description: "A classic pizza with fresh mozzarella, tomatoes, and basil.",
    price: 12.99,
    image: pizzaImage,
    ingredients: [
      "Mozzarella Cheese",
      "Tomato Sauce",
      "Fresh Basil",
      "Olive Oil",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          {pizza.name}
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-md mb-6 md:mb-0"
          />
          <div className="md:ml-8">
            <p className="text-lg text-gray-800 mb-4">{pizza.description}</p>
            <p className="text-xl font-bold text-gray-800 mb-4">
              Price: ${pizza.price.toFixed(2)}
            </p>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Ingredients:
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/cart"
                className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetailsScreen;
