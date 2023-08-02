import React from "react";
import { Link } from "react-router-dom";

const BuyAndSellCard = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="duration-300 transform bg-white border-l-4 border-blue-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Looking for second-hand products!
            </h6>
            <p className="text-sm text-gray-900">
              This is the place for you where you can find second-hand
              products...
            </p>
            <Link
              to="/buy"
              className="inline-flex justify-center items-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-slate-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Start making money!
            </h6>
            <p className="text-sm text-gray-900">
              Do you have something to sell? Post your first ad and start making
              money...
            </p>
            <Link
              to="/sell"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-500 hover:bg-slate-700 focus:shadow-outline focus:outline-none"
            >
              Sell Now
            </Link>
          </div>
        </div>

        <div className="duration-300 transform bg-white border-l-4 border-blue-500 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">
              Searching for Official LU Club's T-Shirt!
            </h6>
            <p className="text-sm text-gray-900">
              Introducing our brand new Club T-shirt, now available for purchase
              online...
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSellCard;
