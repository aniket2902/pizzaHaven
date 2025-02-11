import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import {
  changeOrderStatusThunk,
  getAllOrdersThunk,
} from "../../Redux/thunks/OrderThunk";

const orderStatusOptions = [
  "PENDING",
  "CONFIRMED",
  "IN_PROGRESS",
  "DELIVERED",
  "CANCELLED",
];

const AdminOrdersTable = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orderReducer.allOrders);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(getAllOrdersThunk());
  }, [dispatch]);

  useEffect(() => {
    setOrders(allOrders); // Update state when orders are fetched
  }, [allOrders]);

  const handleStatusChange = (id, newStatus) => {
    console.log("hello i am changed");
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    dispatch(changeOrderStatusThunk(id, newStatus));
  };

  const columns = [
    { name: "Order ID", selector: (row) => row.id, sortable: true },
    { name: "Customer", selector: (row) => row.customer, sortable: true },
    {
      name: "Status",
      cell: (row) => (
        <select
          className="border p-1 rounded"
          value={row.status}
          onChange={(e) => handleStatusChange(row.id, e.target.value)}
        >
          {orderStatusOptions.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      ),
    },
  ];

  return (
    <div className="p-6 mt-10 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Admin Orders</h2>
      <DataTable columns={columns} data={orders} pagination />
    </div>
  );
};

export default AdminOrdersTable;
