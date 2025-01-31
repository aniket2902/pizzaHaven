import React from "react";
import PizzaCard from "./PizzaCard";
import pizza from "../assets/mixed-pizza-with-various-ingridients.jpg";

const PizzaCardContainer = () => {
  const pizzas = [
    {
      image: pizza,
      name: "Pepperoni Pizza",
      description:
        "A delicious pepperoni pizza with a crispy crust and melted cheese.",
      price: "12.99",
    },
    {
      image: pizza,
      name: "Margherita Pizza",
      description:
        "A classic margherita pizza with fresh mozzarella, tomatoes, and basil.",
      price: "10.99",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pizzas.map((pizza, index) => (
        <PizzaCard
          key={index}
          image={pizza.image}
          name={pizza.name}
          description={pizza.description}
          price={pizza.price}
        />
      ))}
    </div>
  );
};

export default PizzaCardContainer;
