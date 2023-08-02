import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section className="container mx-auto">
      {/* Club Registration */}
      <div className="bg-blue-600">
        <div className="px-4 pt-12 pb-0.5 mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-10">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16">
              <Link to="/shop" className="flex justify-center mb-6">
                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-50">
                  <svg
                    className="w-10 h-10"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </Link>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                    <span className="relative">We</span>
                  </span>{" "}
                  will sell our club's T-shirts online
                </h2>
                <p className="text-base text-center text-indigo-100 md:text-lg">
                  Our decision to bring our club's T-shirt sales online stems
                  from our commitment to reaching a wider audience and making
                  our merchandise accessible to all. We understand that not
                  everyone can visit our physical location, and by embracing
                  e-commerce, we hope to connect with students, alumni, and
                  supporters near and far.{" "}
                </p>
              </div>
              <div className="text-2xl text-center font-bold text-white">
                Register below to post your club's T-shirt online
              </div>
              <div className="flex justify-center">
                <Link
                  to="/shop/createShopPost"
                  className="inline-flex items-center justify-center h-12 px-6 mt-4 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                >
                  Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The Banned Community */}
      <div className="relative flex flex-col-reverse py-8 lg:py-0 lg:flex-col border-2 my-5 md:my-8">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
              The Banned Community
              <br className="hidden md:block" /> Official T-Shirt 2023
            </h2>
            <p className="mb-2 text-base text-gray-700 md:text-lg text-center">
              Here is our new T-Shirt for 2023. We frequently launch new
              T-shirts. And those T-shirts carry the identity of our club that
              makes us proud. This year’s t-shirt is very special because it
              carries the iconic Shahid Minar of Leading University.
            </p>
            <p className="text-center font-sans text-2xl font-bold">
              Price: <span className="">500 Tk</span>
            </p>
            <div className="my-5 text-center md:mb-16 lg:mb-20">
              <a
                href="/"
                className="py-2 px-4  bg-blue-500 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Buy Now
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-lg font-medium text-gray-600 md:mb-2">
                Follow us
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-6"
                    >
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/BANNED.SYL"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6"
                    >
                      <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/329742524_720027926494944_1611157270670206791_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=Xbsv6dfFm1wAX8wCd3I&_nc_ht=scontent.fdac138-1.fna&oh=00_AfB2jxPqS83ujKCeDYN-PtW7cUYt6AEL2svcxcIpHuJA8A&oe=640A3106"
            alt=""
          />
        </div>
      </div>

      {/* Orpheus "bolt from the rock" */}
      <div className="relative flex flex-col-reverse lg:flex-col-reverse py-8 lg:py-0  border-2 my-5 md:my-8">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center">
              Orpheus "bolt from the rock"
              <br className="hidden md:block" /> Official T-Shirt 2023
            </h2>
            <p className="mb-2 text-base text-gray-700 md:text-lg text-center">
              Here is the New Design of ORPHEUS t-shirt for 2023. On every mega
              event ORPHEUS launches a new design of Logo & T-shirt which
              represents the legacy of Orpheus on its great journey.
            </p>
            <p className="text-center font-sans text-2xl font-bold">
              Price: <span className="">500 Tk</span>
            </p>
            <div className="my-5 text-center md:mb-16 lg:mb-20">
              <a
                href="/"
                className="py-2 px-4  bg-blue-500 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Buy Now
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-lg font-medium text-gray-600 md:mb-2">
                Follow us
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 30 30"
                      fill="currentColor"
                      className="h-6"
                    >
                      <circle cx="15" cy="15" r="4" />
                      <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/BANNED.SYL"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6"
                    >
                      <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inset-y-0 top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/330084037_567606478625299_2673766087023164059_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=u7tLi5R6ikgAX8QBvu3&_nc_ht=scontent.fdac138-1.fna&oh=00_AfACzeoZHY42sOG0rvuE7ZnwbO7Qe5INwJXLQ7Bv26f37Q&oe=640529BB"
            alt=""
          />
        </div>
      </div>

      {/* Text Message */}
      <div className="mb-10">
        <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
          <span className="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500">
            More Coming {""}
          </span>

          <span className="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500">
            Soon!
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Shop;
