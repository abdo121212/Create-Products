import React from "react";
import { useSelector } from "react-redux";

const Billing = () => {
  const carts = useSelector((state) => state.carts);

  const subTotal = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = (subTotal * 0.1).toFixed(2);

  const totalBilling = Number(subTotal) + Number(tax);

  console.log(totalBilling);

  return (
    <section className="">
      {carts.length ? (
        <div className="rounded-xl max-w-7xl md:mt-0 mt-6 border shadow-md  bg-white p-6">
          <div className="mt-2 flex space-x-6  justify-between">
            <p className="text-gray-700">subTotal</p>
            <p className="text-gray-700">${subTotal}</p>
          </div>

          <div className="mt-2 flex  space-x-6 justify-between">
            <p className="text-gray-700">Shopping</p>
            <p className="text-gray-700">$ {tax}</p>
          </div>

          <div className="mt-2 flex space-x-6  justify-between">
            <p className="text-gray-700">Total</p>
            <p className="text-gray-700">$ {totalBilling}</p>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Billing;
