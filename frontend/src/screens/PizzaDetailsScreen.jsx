import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pizzaImage from "../assets/mixed-pizza-with-various-ingridients.jpg";
import { getPizzaByIdThunk } from "../Redux/thunks/PizzaThunk";

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

  const params = useParams();

  // const pizza = useSelector((state) => state.pizzaReducer.pizzaDetails);

  useEffect(() => {
    dispatch(getPizzaByIdThunk(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      {" "}
      {/* Added pt-24 */}
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {pizza.name}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{pizza.description}</p>

            <div className="mb-6">
              <p className="text-gray-600 font-medium mb-2">Ingredients:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold text-gray-800">
                ₹{pizza.price.toFixed(2)}
              </p>
              <Link
                to="/cart"
                className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <Link to="/menu" className="text-red-500 hover:underline text-lg">
            Back to Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetailsScreen;
