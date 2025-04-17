import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addProduct } from "../redux/Features/Products";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();
  };
  const dispatch = useDispatch();

  return (
    <div className="shadow-lg bg-white p-6 rounded-lg max-w-md h-fit">
      <h1 className="mb-2 font-semibold">Add New product</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name  */}
          <div>
            <label
              htmlFor="name"
              className="text-gray-800 block font-medium text-sm"
            >
              Product:
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 w-full border p-2 rounded-lg focus:outline-none mt-1 focus:ring-2 ring-indigo-800"
              placeholder=" ex: Product 1"
            />
          </div>

          {/* category  */}
          <div>
            <label
              htmlFor="name"
              className="text-gray-800 block font-medium text-sm"
            >
              category:
            </label>
            <select
              name="category"
              {...register("category", { required: true })}
              className="bg-gray-50 w-full border p-2 rounded-lg focus:outline-none mt-1 focus:ring-2 ring-indigo-800"
              id=""
            >
              <option value="">Choose a Category</option>
              <option value="clothing">Clothing</option>
              <option value="gadgets">Gadgets</option>
              <option value="beauty">Beauty</option>
            </select>
          </div>

          {/*   prodcut image url*/}
          <div>
            <label
              htmlFor="image"
              className="text-gray-800 block font-medium text-sm"
            >
              Product URL:
            </label>
            <input
              {...register("image", { required: true })}
              type="text"
              name="image"
              id="image"
              className="bg-gray-50 w-full border p-2 rounded-lg focus:outline-none mt-1 focus:ring-2 ring-indigo-800"
              placeholder="URL"
            />
          </div>

          {/* Price and Date */}

          <div className="grid grid-cols-2 gap-4">
            {/* Price  */}
            <div>
              <label
                htmlFor="price"
                className="text-gray-800 block font-medium text-sm"
              >
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 w-full border p-2 rounded-lg focus:outline-none mt-1 focus:ring-2 ring-indigo-800"
                placeholder="100"
              />
            </div>

            {/* date  */}
            <div>
              <label
                htmlFor="date"
                className="text-gray-800 block font-medium text-sm"
              >
                Date:
              </label>
              <input
                {...register("date", { required: true })}
                type="date"
                name="date"
                id="date"
                className="bg-gray-50 w-full border p-2 rounded-lg focus:outline-none mt-1 focus:ring-2 ring-indigo-800"
                placeholder=" ex: Product 1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="hover:bg-indigo-900 btn text-white bg-indigo-600 w-full p-2 rounded-md"
          >
            Add Product{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
