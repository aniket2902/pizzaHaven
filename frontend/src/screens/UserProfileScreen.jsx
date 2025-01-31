import React, { useState } from "react";

const orders = [
  {
    id: 1,
    date: "2025-01-20",
    items: [
      { name: "Margherita Pizza", quantity: 2, price: 12.99 },
      { name: "Pepperoni Pizza", quantity: 1, price: 14.99 },
    ],
  },
  {
    id: 2,
    date: "2025-01-15",
    items: [
      { name: "Veggie Pizza", quantity: 1, price: 10.99 },
      { name: "Garlic Bread", quantity: 2, price: 4.99 },
    ],
  },
];

const UserProfileScreen = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 pt-24">
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          User Profile
        </h2>
        <div className="mb-6">
          <p className="text-lg font-medium text-gray-800">Name: {user.name}</p>
          <p className="text-lg font-medium text-gray-800">
            Email: {user.email}
          </p>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Order History</h3>
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border-b border-gray-300 pb-4">
              <p className="text-lg font-medium text-gray-800">
                Order Date: {order.date}
              </p>
              <ul className="list-disc list-inside text-gray-600">
                {order.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - Qty: {item.quantity} - Price: $
                    {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileScreen;
