import React, { useState } from "react";

const MenuScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      category: "Classic",
      description: "Tomato sauce, mozzarella, and basil.",
      price: "$10",
    },
    {
      id: 2,
      name: "Pepperoni",
      category: "Classic",
      description: "Tomato sauce, mozzarella, and pepperoni.",
      price: "$12",
    },
    {
      id: 3,
      name: "Veggie Delight",
      category: "Veggie",
      description:
        "Tomato sauce, mozzarella, mushrooms, bell peppers, and onions.",
      price: "$11",
    },
    {
      id: 4,
      name: "Meat Feast",
      category: "Meat Lovers",
      description: "Tomato sauce, mozzarella, pepperoni, sausage, and bacon.",
      price: "$14",
    },
    {
      id: 5,
      name: "Spicy Inferno",
      category: "Spicy",
      description: "Tomato sauce, mozzarella, jalapeños, and spicy sausage.",
      price: "$13",
    },
    {
      id: 6,
      name: "BBQ Chicken",
      category: "Specialty",
      description: "BBQ sauce, mozzarella, chicken, and onions.",
      price: "$15",
    },
    {
      id: 7,
      name: "Chocolate Dessert Pizza",
      category: "Dessert",
      description: "Chocolate sauce, marshmallows, and strawberries.",
      price: "$9",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Menu
        </h2>

        <div className="space-y-6">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="flex items-center justify-between py-4 border-b border-gray-300"
            >
              <div className="flex items-center space-x-4">
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {pizza.name}
                  </p>
                  <p className="text-gray-600">{pizza.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">{pizza.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
