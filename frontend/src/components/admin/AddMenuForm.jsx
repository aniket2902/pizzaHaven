import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
    .min(1, "Price must be greater than 0"),
  quantity: Yup.number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .min(1, "Quantity must be greater than 0"),
  size: Yup.string().required("Size is required"), // ✅ Size validation added
});

const initialValues = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  size: "", // ✅ Added size field
};

const AddMenuForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result.split(",")[1]); // Extract only Base64 string
        setImagePreview(URL.createObjectURL(file));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageBase64("");
  };

  const handleSubmit = (values) => {
    const token = localStorage.getItem("jwt");
    console.log(imageBase64);

    const requestData = {
      name: values.name,
      description: values.description,
      price: values.price,
      quantity: values.quantity,
      imageUrl: imageBase64, // Sending as base64
      itemSizes: [
        {
          size: values.size, // ✅ Sending selected size
          price: values.price,
        },
      ],
    };

    axios
      .post("http://localhost:8080/api/pizzas", requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Item created successfully", response.data);
        console.log("Response", response);

        setOpenSnackBar(true);
      })
      .catch((error) => {
        console.error("Error creating item", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Add New Item
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors }) => (
            <Form className="space-y-4">
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                className="hidden"
                onChange={handleImageChange}
              />
              <label
                htmlFor="fileInput"
                className="block text-center cursor-pointer text-red-500"
              >
                Upload Image
              </label>
              {imagePreview && (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Uploaded preview"
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2"
                  >
                    X
                  </button>
                </div>
              )}

              <div>
                <label className="block text-gray-600 font-medium">Name</label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Enter description"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-red-500"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">Price</label>
                <Field
                  name="price"
                  type="number"
                  placeholder="Enter price"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium">
                  Quantity
                </label>
                <Field
                  name="quantity"
                  type="number"
                  placeholder="Enter quantity"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
                />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* ✅ Size Dropdown Added */}
              <div>
                <label className="block text-gray-600 font-medium">Size</label>
                <Field
                  as="select"
                  name="size"
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-red-500"
                >
                  <option value="">Select Size</option>
                  <option value="SMALL">Small</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LARGE">Large</option>
                </Field>
                <ErrorMessage
                  name="size"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-2 rounded-full font-medium transition ${
                  Object.keys(errors).length === 0
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
                disabled={Object.keys(errors).length > 0}
              >
                Create Item
              </button>
            </Form>
          )}
        </Formik>
      </div>
      {openSnackBar && (
        <div className="fixed bottom-4 right-4 px-4 py-2 rounded shadow-md bg-green-500 text-white">
          Item created successfully!
          <button
            onClick={() => setOpenSnackBar(false)}
            className="ml-4 font-bold"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default AddMenuForm;
