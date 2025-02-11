import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Pencil, Trash2, Plus } from "lucide-react";
import DataTable from "react-data-table-component";
import {
  deletePizzaThunk,
  getAllPizzasThunk,
} from "../../Redux/thunks/PizzaThunk";

const MenuItemTable = ({ isDashboard, name }) => {
  const dispatch = useDispatch();

  const pizzas = useSelector((state) => state.pizzaReducer.allPizzas);

  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Margherita", price: 10, category: "Veg" },
    { id: 2, name: "Pepperoni", price: 12, category: "Non-Veg" },
  ]);

  const handleEdit = (id) => {
    console.log("Edit item with ID:", id);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
    dispatch(deletePizzaThunk(id));
  };

  const handleAdd = () => {
    const newItem = {
      id: Date.now(),
      name: "New Pizza",
      price: 15,
      category: "Veg",
    };
    setMenuItems([...menuItems, newItem]);
    navigate("/admin/outlets/additem");
  };

  useEffect(() => {
    dispatch(getAllPizzasThunk());
  }, []);

  const columns = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "Name", selector: (row) => row.name, sortable: true },
    { name: "Price", selector: (row) => row.itemSizes.price, sortable: true },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="p-1 text-blue-500"
            onClick={() => handleEdit(row.id)}
          >
            <Pencil size={16} />
          </button>
          <button
            className="p-1 text-red-500"
            onClick={() => handleDelete(row.id)}
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 mt-10 bg-white shadow-md rounded-md">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">{name || "Menu Items"}</h2>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
        >
          <Plus size={16} className="mr-1" /> Add Item
        </button>
      </div>
      <DataTable columns={columns} data={pizzas} pagination />
    </div>
  );
};

export default MenuItemTable;
