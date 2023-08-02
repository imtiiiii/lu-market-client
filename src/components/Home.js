import React from "react";
import Lottie from "lottie-react";
import marketplace from "../assets/marketplace.json";
import { Link } from "react-router-dom";
import { FcAdvance } from "react-icons/fc";
import BuyAndSellCard from "../components/Buy/BuyAndSellCard";

const Home = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
      <div className="mt-8 md:mt-0 flex flex-col items-center md:justify-between md:flex-row md:mb-8">
        <div className="lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-red-600">
                Live!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold text-gray-900 sm:text-4xl sm:leading-none">
              {" "}
              The First Ever Marketplace in
              <br className="hidden md:block" />{" "}
              <span className="inline-block text-blue-500">
                Leading University
              </span>
            </h2>
            <p className="text-base font-normal text-justify text-black md:text-lg">
              LU Marketplace is a platform where university's students, teachers
              and staffs can buy and sell almost everything between them! We
              help them to buy and sell eletronics products such as Mobile
              phone, laptop, gadgets, etc. Our university's clubs can sell their
              T-shirt through this website.
            </p>
          </div>
          <div className="flex justify-start">
            <Link
              to="/about"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Learn More</span>
              <FcAdvance></FcAdvance>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <Lottie className="" animationData={marketplace} loop={true} />
        </div>
      </div>
      {/* The card of categories started from here! */}
      <BuyAndSellCard></BuyAndSellCard>
    </div>
  );
};

export default Home;
