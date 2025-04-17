import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Features/CartSlice";

const ProductCart = ({ product }) => {
  const { name, price, image } = product || {};

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="card bg-base-100 w-[380px] shadow-xl h-[500px] rounded-md">
        <figure>
          <img src={image} alt="name" className="rounded-t-xl w-full object-contain max-h-[250px]"   />
        </figure>
        <div className="card-body p-3">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            error asperiores mollitia minus porro quasi tempore voluptatem
            corporis sapiente qui? Deleniti facere magnam nisi illum, officiis
            adipisci at repellat ducimus?
          </p>
          <div className="card-actions flex items-center justify-between mt-5">
            <p className="text-blue-700 font-semibold"> {price} $</p>
            <button onClick={handleAddToCart} className="hover:bg-indigo-900 btn text-white bg-indigo-600  p-2 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
