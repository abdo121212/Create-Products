import React from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../redux/Features/CartSlice";

const CartItem = ({ cart }) => {
  const { image, price, category, name, quantity, id } = cart;

  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decreaseQuantity(id));
    } else removeItem(id);
  };
  const removeFromCartItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className="">
        <div className="rounded-lg bg-white shadow-2xl  p-5">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4 bg-white mb-6 rounded">
            <div className="flex items-center justify-center gap-2">
              <img
                src={image}
                alt="product"
                className="object-cover rounded-md h-28"
              />
              <div className="flex flex-col space-y-1 ">
                <h1 className="font-bold  text-lg">{name}</h1>
                <h3 className="text-gray-600 text-md">price : $ {price}</h3>
                <p className="text-gray-600 text-md"> category : {category}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center sm:space-y-6 sm:mt-0  sm:block">
              <div className="flex items-center border-gray-100">
                <span
                  onClick={handleDecrease}
                  className="rounded-l px-3.5  py-1 duration-100 hover:text-white bg-gray-100 cursor-pointer  hover:bg-blue-400"
                >
                  -
                </span>
                <input
                  type="number"
                  readOnly
                  className="size-8 border bg-white text-center text-sm outline-none "
                  value={quantity}
                />
                <span
                  onClick={handleIncrease}
                  className="rounded-r px-3.5  py-1 duration-100 hover:text-white bg-gray-100 cursor-pointer  hover:bg-blue-400"
                >
                  +
                </span>
              </div>

              {/* total Price and deleted Product  */}
              <div className="flex items-center space-x-7 ">
                <p> $ {(price * quantity).toFixed(2)}</p>
                <button
                  onClick={removeFromCartItem}
                  className=" text-red-500  text-sm  font-bold"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
