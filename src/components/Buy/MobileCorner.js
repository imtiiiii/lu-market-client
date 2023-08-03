import React, { useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const MobileCorner = () => {
  const [mobileProducts, setMobileProducts] = React.useState([]);
  const loadInitialProducts = async () => {
    try {
      const [mobile] = await Promise.all([
        axios.get(
          `http://localhost:3333/product/get-buy-product?initial=${false}&category=${"mobile"}`
        )
      ])
      setMobileProducts(mobile.data)


    } catch (error) {
      setMobileProducts([])
    }
  };
  useEffect(() => {
    loadInitialProducts();
  }, []);
  return (
    <div>
      {/* Mobile Corner */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Mobile Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {
          mobileProducts.map((product, index) => (
            <>
              <div key={index} className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
                <div className="px-4 py-2">
                  <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    {product.name}
                  </h1>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {
                      product.description
                    }
                  </p>
                </div>

                <img
                  className="object-cover w-full h-60 mt-2"
                  src={'http://localhost:3333/uploads/' + product.image}
                  alt="NIKE AIR"
                />
                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                  <h1 className="text-lg font-bold text-white">TK {product.price}</h1>
                  {/* <p className="text-white text-md"></p> */}
                  <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                    Buy Now
                  </button>
                </div>
              </div>

            </>

          ))
        }
      </div>

    </div>
  );
};

export default MobileCorner;
