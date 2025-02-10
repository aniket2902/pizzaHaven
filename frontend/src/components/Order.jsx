import React from "react";
import { useState, useEffect } from "react";
import pizza from "../assets/icon-pizza-8.jpg";

const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD123",
      image: pizza,
      status: "Delivered",
      items: [
        { name: "Pizza", description: "Cheese Burst", amount: 299 },
        { name: "Garlic Bread", description: "With Extra Cheese", amount: 149 },
      ],
      totalAmount: 448,
    },
    {
      id: "ORD124",
      image: pizza,
      status: "Processing",
      items: [
        { name: "Burger", description: "Veg Whopper", amount: 199 },
        { name: "French Fries", description: "Large Size", amount: 99 },
      ],
      totalAmount: 298,
    },
    {
      id: "ORD124",
      image: pizza,
      status: "Processing",
      items: [
        { name: "Burger", description: "Veg Whopper", amount: 199 },
        { name: "French Fries", description: "Large Size", amount: 99 },
      ],
      totalAmount: 298,
    },
    {
      id: "ORD124",
      image: pizza,
      status: "Processing",
      items: [
        { name: "Burger", description: "Veg Whopper", amount: 199 },
        { name: "French Fries", description: "Large Size", amount: 99 },
      ],
      totalAmount: 298,
    },
  ]);
  useEffect(() => {
    const token = localStorage.getItem("jwt"); // Retrieve JWT from localStorage
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };
  return (
    // <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //   {orders.map((order) => (
    //     <div
    //       key={order.id}
    //       className="bg-white p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition"
    //       onClick={() => handleOrderClick(order)}
    //     >
    //       <img
    //         src={order.image}
    //         alt="Order"
    //         className="w-full h-40 object-cover rounded-lg"
    //       />
    //       <h2 className="text-lg font-semibold mt-2">Order ID: {order.id}</h2>
    //       <p className="text-sm text-gray-500">Status: {order.status}</p>
    //     </div>
    //   ))}

    //   {/* Order Details Modal */}
    //   {selectedOrder && (
    //     <Dialog open={open} onOpenChange={setOpen}>
    //       <DialogContent>
    //         <DialogTitle>Order Details</DialogTitle>
    //         <table className="w-full mt-4 border-collapse border border-gray-300">
    //           <thead>
    //             <tr className="bg-gray-100">
    //               <th className="border p-2">Item</th>
    //               <th className="border p-2">Description</th>
    //               <th className="border p-2">Amount</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {selectedOrder.items.map((item, index) => (
    //               <tr key={index} className="border">
    //                 <td className="border p-2">{item.name}</td>
    //                 <td className="border p-2">{item.description}</td>
    //                 <td className="border p-2">₹{item.amount}</td>
    //               </tr>
    //             ))}
    //           </tbody>
    //           <tfoot>
    //             <tr className="font-bold">
    //               <td colSpan="2" className="border p-2 text-right">
    //                 Total:
    //               </td>
    //               <td className="border p-2">₹{selectedOrder.totalAmount}</td>
    //             </tr>
    //           </tfoot>
    //         </table>
    //       </DialogContent>
    //     </Dialog>
    //   )}
    // </div>
    <div className="p-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition"
          onClick={() => handleOrderClick(order)}
        >
          <img
            src={order.image}
            alt="Order"
            className="w-full h-40 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-2">Order ID: {order.id}</h2>
          <p className="text-sm text-gray-500">Status: {order.status}</p>
        </div>
      ))}

      {/* Order Details Modal */}
      {open && selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
            <h2 className="text-xl font-bold">Order Details</h2>
            <table className="w-full mt-4 border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Item</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {selectedOrder.items.map((item, index) => (
                  <tr key={index} className="border">
                    <td className="border p-2">{item.name}</td>
                    <td className="border p-2">{item.description}</td>
                    <td className="border p-2">₹{item.amount}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td colSpan="2" className="border p-2 text-right">
                    Total:
                  </td>
                  <td className="border p-2">₹{selectedOrder.totalAmount}</td>
                </tr>
              </tfoot>
            </table>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
