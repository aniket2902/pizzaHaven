import React from 'react'

const OrderTable = ({ isDashboard, name }) => {
    const restaurantsOrder = {
        orders: [
          {
            id: 1,
            customer: { email: "john.doe@example.com" },
            totalAmount: 499,
            orderStatus: "PENDING",
            items: [
              {
                food: {
                  name: "Margherita Pizza",
                  images: ["https://via.placeholder.com/50"],
                },
                ingredients: ["Cheese", "Tomato Sauce", "Basil"],
              },
            ],
          },
          {
            id: 2,
            customer: { email: "jane.smith@example.com" },
            totalAmount: 699,
            orderStatus: "OUT_FOR_DELIVERY",
            items: [
              {
                food: {
                  name: "Pepperoni Pizza",
                  images: ["https://via.placeholder.com/50"],
                },
                ingredients: ["Cheese", "Pepperoni", "Tomato Sauce"],
              },
            ],
          },
          {
            id: 3,
            customer: { email: "mike.jones@example.com" },
            totalAmount: 599,
            orderStatus: "DELIVERED",
            items: [
              {
                food: {
                  name: "Veggie Pizza",
                  images: ["https://via.placeholder.com/50"],
                },
                ingredients: ["Olives", "Bell Peppers", "Onions"],
              },
            ],
          },
        ],
        loading: false,
      };
      
  return (
    // <div className="bg-white shadow-md rounded-lg p-4 mt-2">
    //   <h2 className="text-lg font-semibold mb-4">{name}</h2>
    //   <div className="overflow-x-auto">
    //     <table className="w-full border border-gray-300">
    //       <thead>
    //         <tr className="bg-gray-100">
    //           <th className="p-2 border">Id</th>
    //           <th className="p-2 border">Image</th>
    //           <th className="p-2 border">Customer</th>
    //           <th className="p-2 border">Price</th>
    //           <th className="p-2 border">Name</th>
    //           {!isDashboard && <th className="p-2 border">Ingredients</th>}
    //           {!isDashboard && <th className="p-2 border">Status</th>}
    //           {!isDashboard && <th className="p-2 border">Update</th>}
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {restaurantsOrder.orders?.slice(0, isDashboard ? 7 : restaurantsOrder.orders.length).map((item, index) => (
    //           <tr key={item.id} className="hover:bg-gray-50">
    //             <td className="p-2 border">{item?.id}</td>
    //             <td className="p-2 border">
    //               <div className="flex space-x-1">
    //                 {item.items.map((orderItem, idx) => (
    //                   <img key={idx} src={orderItem.food?.images[0]} alt={orderItem.food.name} className="w-10 h-10 rounded-full" />
    //                 ))}
    //               </div>
    //             </td>
    //             <td className="p-2 border">{item?.customer.email}</td>
    //             <td className="p-2 border">₹{item?.totalAmount}</td>
    //             <td className="p-2 border">
    //               {item.items.map((orderItem, idx) => (
    //                 <p key={idx}>{orderItem.food?.name}</p>
    //               ))}
    //             </td>
    //             {!isDashboard && (
    //               <td className="p-2 border">
    //                 <div className="flex flex-wrap gap-1">
    //                   {item.items.map((orderItem) =>
    //                     orderItem.ingredients?.map((ingre, idx) => (
    //                       <span key={idx} className="bg-gray-200 px-2 py-1 text-xs rounded-md">{ingre}</span>
    //                     ))
    //                   )}
    //                 </div>
    //               </td>
    //             )}
    //             {!isDashboard && (
    //               <td className="p-2 border text-center">
    //                 <span
    //                   className={`px-2 py-1 text-xs font-semibold rounded-md ${
    //                     item.orderStatus === "PENDING"
    //                       ? "bg-blue-500 text-white"
    //                       : item.orderStatus === "DELIVERED"
    //                       ? "bg-green-500 text-white"
    //                       : "bg-gray-500 text-white"
    //                   }`}
    //                 >
    //                   {item?.orderStatus}
    //                 </span>
    //               </td>
    //             )}
    //             {!isDashboard && (
    //               <td className="p-2 border text-center relative">
    //                 <button
    //                   className="bg-gray-300 px-2 py-1 rounded-md"
    //                   onClick={() => setMenuIndex(index === menuIndex ? null : index)}
    //                 >
    //                   Status
    //                 </button>
    //                 {menuIndex === index && (
    //                   <div className="absolute bg-white shadow-lg rounded-md mt-1 p-2 w-32">
    //                     {orderStatus.map((s) => (
    //                       <p
    //                         key={s.value}
    //                         className="cursor-pointer hover:bg-gray-100 px-2 py-1"
    //                         onClick={() => handleUpdateOrder(item.id, s.value)}
    //                       >
    //                         {s.label}
    //                       </p>
    //                     ))}
    //                   </div>
    //                 )}
    //               </td>
    //             )}
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="bg-white shadow-md rounded-lg p-4 mt-12 border border-gray-200">
    <h2 className="text-2xl font-semibold text-orange-600 mb-4">{name}</h2>
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-800 font-semibold">
            <th className="p-3 border">Customer</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Name</th>
            {!isDashboard && <th className="p-3 border">Ingredients</th>}
            {!isDashboard && <th className="p-3 border">Status</th>}
            {!isDashboard && <th className="p-3 border">Update</th>}
          </tr>
        </thead>
        <tbody>
          {restaurantsOrder.orders?.slice(0, isDashboard ? 7 : restaurantsOrder.orders.length).map((item, index) => (
            <tr key={item.id} className="hover:bg-gray-50">
              <td className="p-3 border text-gray-700">{item?.customer.email}</td>
              <td className="p-3 border text-gray-700">₹{item?.totalAmount}</td>
              <td className="p-3 border text-gray-700">
                {item.items.map((orderItem, idx) => (
                  <p key={idx}>{orderItem.food?.name}</p>
                ))}
              </td>
              {!isDashboard && (
                <td className="p-3 border">
                  <div className="flex flex-wrap gap-1">
                    {item.items.map((orderItem) =>
                      orderItem.ingredients?.map((ingre, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 text-xs rounded-md">{ingre}</span>
                      ))
                    )}
                  </div>
                </td>
              )}
              {!isDashboard && (
                <td className="p-3 border text-center">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-md ${
                      item.orderStatus === "PENDING"
                        ? "bg-orange-300 text-orange-900"
                        : item.orderStatus === "DELIVERED"
                        ? "bg-green-300 text-green-900"
                        : "bg-gray-300 text-gray-900"
                    }`}
                  >
                    {item?.orderStatus}
                  </span>
                </td>
              )}
              {!isDashboard && (
                <td className="p-3 border text-center relative">
                  <button
                    className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
                    onClick={() => setMenuIndex(index === menuIndex ? null : index)}
                  >
                    Status
                  </button>
                  {menuIndex === index && (
                    <div className="absolute bg-white shadow-lg rounded-md mt-1 p-2 w-32 border border-gray-300">
                      {orderStatus.map((s) => (
                        <p
                          key={s.value}
                          className="cursor-pointer hover:bg-gray-100 px-2 py-1 text-gray-700"
                          onClick={() => handleUpdateOrder(item.id, s.value)}
                        >
                          {s.label}
                        </p>
                      ))}
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default OrderTable