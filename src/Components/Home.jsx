import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import AddProduct from "./AddProduct";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <div className="py-8 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2 ">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4 place-items-center">
              {products.length ? (
                products.map((product, index) => (
                  <ProductCart key={index} product={product} />
                ))
              ) : (
                <div>Not Product Found !</div>
              )}
            </div>
          </div>
            <AddProduct />
        </div>
      </div>
    </>
  );
};

export default Home;
