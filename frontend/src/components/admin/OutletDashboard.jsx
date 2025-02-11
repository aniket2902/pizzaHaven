import React, { useEffect } from "react";
import {
  FaDollarSign,
  FaPizzaSlice,
  FaClipboardList,
  FaRupeeSign,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersThunk } from "../../Redux/thunks/OrderThunk";

const OutletDashboard = () => {
  const totalSales = 5000;
  const totalItemsSold = 20;

  const allOrders = useSelector((state) => state.orderReducer.allOrders);

  const dispatch = useDispatch();

  // const [orders, setOrders] = useState([]);

  useEffect(() => {
    dispatch(getAllOrdersThunk());
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen mt-8">
      <h1 className="text-3xl font-bold mb-6">Outlet Dashboard</h1>

      {/* Dashboard Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 flex items-center bg-white shadow-lg rounded-2xl">
          {/* <FaDollarSign className="text-green-500 text-3xl mr-4" /> */}
          <FaRupeeSign className="text-green-500 text-3xl mr-4" />
          <div>
            <p className="text-gray-600">Total Sales</p>
            <h2 className="text-xl font-semibold">{totalSales}</h2>
          </div>
        </div>

        <div className="p-6 flex items-center bg-white shadow-lg rounded-2xl">
          <FaClipboardList className="text-blue-500 text-3xl mr-4" />
          <div>
            <p className="text-gray-600">Total Orders</p>
            <h2 className="text-xl font-semibold">{allOrders?.length}</h2>
          </div>
        </div>

        <div className="p-6 flex items-center bg-white shadow-lg rounded-2xl">
          <FaPizzaSlice className="text-red-500 text-3xl mr-4" />
          <div>
            <p className="text-gray-600">Total Pizzas Sold</p>
            <h2 className="text-xl font-semibold">{totalItemsSold}</h2>
          </div>
        </div>
      </div>

      {/* Orders and Menu Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* <OrderTable />
        <MenuItemTable /> */}
      </div>
    </div>
  );
};

export default OutletDashboard;
