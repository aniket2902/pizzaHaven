import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, Trash2, Minus } from "lucide-react";

const MenuItemTable = ({ isDashboard, name }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { menu, ingredients, restaurant, auth } = useSelector((store) => store);
  const restaurant = {
    usersRestaurant: {
      id: 101,
      name: "Foodie's Paradise",
      address: "123 Main Street, Mumbai, India",
      contact: "+91 9876543210",
      email: "contact@foodiesparadise.com",
      owner: "Yash Manoj Awatade",
      openingHours: "10:00 AM - 11:00 PM",
      cuisines: ["Italian", "Indian", "Fast Food"],
      rating: 4.5,
      menuItems: [1, 2, 3], // Referencing menu items by ID
    },
  };
  const menu = {
    menuItems: [
      {
        id: 1,
        name: "Margherita Pizza",
        brand: "Pizza Hut",
        price: 299,
        available: true,
        images: ["https://via.placeholder.com/100"], // Placeholder image
        ingredients: [
          { id: 101, name: "Mozzarella Cheese", category: "Cheese" },
          { id: 102, name: "Tomato Sauce", category: "Sauce" },
          { id: 103, name: "Basil", category: "Toppings" },
        ],
      },
      {
        id: 2,
        name: "Spicy Paneer Burger",
        brand: "Burger King",
        price: 199,
        available: false,
        images: ["https://via.placeholder.com/100"],
        ingredients: [
          { id: 201, name: "Paneer Patty", category: "Patty" },
          { id: 202, name: "Lettuce", category: "Veggies" },
          { id: 203, name: "Mayo Sauce", category: "Sauce" },
        ],
      },
      {
        id: 3,
        name: "Chicken Biryani",
        brand: "Hyderabad House",
        price: 399,
        available: true,
        images: ["https://via.placeholder.com/100"],
        ingredients: [
          { id: 301, name: "Basmati Rice", category: "Rice" },
          { id: 302, name: "Chicken", category: "Meat" },
          { id: 303, name: "Saffron", category: "Spices" },
        ],
      },
    ],
  };
  const { id } = useParams();
  const jwt = localStorage.getItem("jwt");

//   useEffect(() => {
//     if (restaurant.usersRestaurant) {
//       dispatch(
//         getMenuItemsByRestaurantId({
//           restaurantId: restaurant.usersRestaurant?.id,
//           jwt: localStorage.getItem("jwt"),
//           seasonal: false,
//           vegetarian: false,
//           nonveg: false,
//           foodCategory: "",
//         })
//       );
//     }
//   }, [restaurant.usersRestaurant]);

  const handleFoodAvailability = (foodId) => {
    dispatch(updateMenuItemsAvailability({ foodId, jwt: auth.jwt || jwt }));
  };

  const handleDeleteFood = (foodId) => {
    dispatch(deleteFoodAction({ foodId, jwt: auth.jwt || jwt }));
  };

  return (
    <div className="w-full bg-white shadow-md rounded-lg p-20 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-orange-700">{name}</h2>
        <button
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={() => navigate("/admin/restaurant/add-menu")}
        >
          <Pencil size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="p-3 border">Image</th>
              <th className="p-3 border">Title</th>
              <th className="p-3 border text-center">Price</th>
              <th className="p-3 border text-center">Availability</th>
              {!isDashboard && (
                <th className="p-3 border text-center">Delete</th>
              )}
            </tr>
          </thead>
          <tbody>
            {menu.menuItems?.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="p-3 border flex justify-center">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-3 border text-gray-700">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.brand}</p>
                  </div>
                </td>
                <td className="p-3 border text-center text-gray-700">
                  ₹{item.price}
                </td>
                <td className="p-3 border text-center">
                  <button
                    className={`px-3 py-1 rounded-md ${
                      item.available
                        ? "bg-green-200 text-green-700"
                        : "bg-red-200 text-red-700"
                    }`}
                    onClick={() => handleFoodAvailability(item.id)}
                  >
                    {item.available ? "In Stock" : "Out of Stock"}
                  </button>
                </td>
                {!isDashboard && (
                  <td className="p-3 border text-center">
                    <button onClick={() => handleDeleteFood(item.id)}>
                      <Trash2
                        size={20}
                        className="text-red-600 hover:text-red-800"
                      />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuItemTable;
