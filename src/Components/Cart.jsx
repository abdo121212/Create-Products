import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import 
Billing from "./Billing";

const Cart = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <section className="py-8 max-w-7xl mx-auto px-4">
      <h1 className="text-lg font-bold mb-5">Shopping Cart</h1>
      {/* details Products */}
      <div className="flex flex-col  md:flex-row justify-between items-start md:gap-8 gap-4">
        <div className="md:w-2/3 w-full ">
          {carts.length ? (
            <div className=" space-y-5 ">
              {carts.map((cart, index) => (
                <CartItem cart={cart} key={index} />
              ))}
            </div>
          ) : (
            <div className="capitalize">no products in your Cart</div>
          )}
        </div>
        <div>
            

            <Billing/>
        </div>
      </div>
    </section>
  );
};

export default Cart;
