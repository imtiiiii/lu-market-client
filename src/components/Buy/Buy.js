import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
axios.defaults.withCredentials = true;
const Buy = () => {
  const [mobileProducts, setMobileProducts] = React.useState([]);
  const [gadgetProducts, setGadgetProducts] = React.useState([]);
  const [laptopProducts, setLaptopProducts] = React.useState([]);

  const loadInitialProducts = async () => {
    try {
      const [mobile, gadget, laptop] = await Promise.all([
        axios.get(
          `http://localhost:3333/product/get-buy-product?initial=${true}&category=${"mobile"}`
        ),
        axios.get(
          `http://localhost:3333/product/get-buy-product?initial=${true}&category=${"gadget"}`
        ),
        axios.get(
          `http://localhost:3333/product/get-buy-product?initial=${true}&category=${"laptop"}`
        ),
      ])
      setMobileProducts(mobile.data)
      setGadgetProducts(gadget.data)
      setLaptopProducts(laptop.data)

    } catch (error) {
      setMobileProducts([])
      setGadgetProducts([])
      setLaptopProducts([])


    }
  };
  useEffect(() => {
    loadInitialProducts();
  }, []);
  return (
    <section className="container mx-auto">
      {/* Mobile Phones */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Mobile Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {
          mobileProducts.map((product, index) => (
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

          ))
        }


        {/* Product - 1 */}
        {/* <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              iPhone XS
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/gallery_adv/public/2018/10/iphone_xs_home_screen.jpg?itok=mRkHxPDy"
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 20,990</h1>
            <p className="text-white text-md">2 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div> */}

        {/* Product - 2 */}
        {/* <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Samsung Galaxy Note 10
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/08/galaxynote10edited-31-920x613.jpg"
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 25550</h1>
            <p className="text-white text-md">5 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div> */}

        {/* Product - 3 */}
        {/* <div className="rounded-lg shadow-lg dark:bg-gray-800 border-2">
          <div className="px-4 py-2">
            <h1 className="text-xl font-bold text-gray-800  dark:text-white">
              Xiaomi Poco X3 Pro
            </h1>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
              quidem sequi illum facere recusandae voluptatibus
            </p>
          </div>

          <img
            className="object-cover w-full h-60 mt-2"
            src="https://root-nation.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/04/poco-x3-pro-101.jpg.webp"
            alt="Xiaomi Poco X3 Pro"
          />
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">TK 12500</h1>
            <p className="text-white text-md">7 hours ago</p>
            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
              Buy Now
            </button>
          </div>
        </div> */}
      </div>

      {/* Gadget Corner */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Gadget Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {
          gadgetProducts.map((product, index) => (
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

          ))
        }
      </div>

      {/* Laptop Corner */}
      <div className="border-b-[1px] border-gray-500 mt-10 mb-5 ">
        <h1 className="text-center md:text-start text-3xl font-semibold text-gray-900 pb-2">
          Laptop Corner
        </h1>
      </div>
      <div className="grid gap-y-4 px-3 md:px-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4">
        {/* Product - 1 */}
        {
          laptopProducts.map((product, index) => (
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

          ))
        }
      </div>
      {/* Best Places to sell your products */}
      <header className="dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full max-w-md"
                src="https://merakiui.com/images/components/Email-campaign-bro.svg"
                alt="Illustration Vector Art"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-end lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  The Best Place To Sell Your{" "}
                  <span className="text-blue-500">Product</span>
                </h1>

                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  Be the first guy to start making money!
                </p>

                <div className="mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                  <Link
                    to="/sell"
                    className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                  >
                    Sell Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Buy;
