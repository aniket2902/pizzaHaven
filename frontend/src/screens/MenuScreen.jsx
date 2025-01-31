import React, { useState } from "react";

const MenuScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      category: "Classic",
      description: "Tomato sauce, mozzarella, and basil.",
      price: "₹10",
    },
    {
      id: 2,
      name: "Pepperoni",
      category: "Classic",
      description: "Tomato sauce, mozzarella, and pepperoni.",
      price: "₹12",
    },
    {
      id: 3,
      name: "Veggie Delight",
      category: "Veggie",
      description:
        "Tomato sauce, mozzarella, mushrooms, bell peppers, and onions.",
      price: "₹11",
    },
    {
      id: 4,
      name: "Meat Feast",
      category: "Meat Lovers",
      description: "Tomato sauce, mozzarella, pepperoni, sausage, and bacon.",
      price: "₹14",
    },
    {
      id: 5,
      name: "Spicy Inferno",
      category: "Spicy",
      description: "Tomato sauce, mozzarella, jalapeños, and spicy sausage.",
      price: "₹13",
    },
    {
      id: 6,
      name: "BBQ Chicken",
      category: "Specialty",
      description: "BBQ sauce, mozzarella, chicken, and onions.",
      price: "₹15",
    },
    {
      id: 7,
      name: "Chocolate Dessert Pizza",
      category: "Dessert",
      description: "Chocolate sauce, marshmallows, and strawberries.",
      price: "₹9",
    },
  ];

  const filteredPizzas = selectedFilter
    ? pizzas.filter((pizza) => pizza.category === selectedFilter)
    : pizzas;

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-10">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Explore Our Pizza Menu
        </h1>
        <p className="text-gray-600 mb-8">
          Choose from a wide variety of delicious pizzas crafted with the finest
          ingredients. Whether you're a fan of classic flavors or adventurous
          combinations, we have something for everyone.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Filter by Category
          </h2>
          <ul className="space-y-2">
            {[
              "All",
              "Classic",
              "Veggie",
              "Meat Lovers",
              "Spicy",
              "Specialty",
              "Dessert",
            ].map((category) => (
              <li
                key={category}
                className={`cursor-pointer p-2 rounded-lg ${
                  selectedFilter === category
                    ? "bg-red-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() =>
                  setSelectedFilter(category === "All" ? null : category)
                }
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Section */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPizzas.map((pizza) => (
              <div
                key={pizza.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src="https://via.placeholder.com/400x200"
                  alt={pizza.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {pizza.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{pizza.description}</p>
                  <p className="text-red-500 font-bold">{pizza.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
