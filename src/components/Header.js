import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
// import { AuthContext } from "../contexts/UserContext";
import {
  FaShopify,
  FaRegArrowAltCircleRight,
  FaInfoCircle,
  FaCartPlus,
  FaDollarSign,
} from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
const Header = () => {
  axios.defaults.withCredentials = true;
  const { userLoading, user } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const res = await axios.get('http://localhost:3333/auth/logout')
      if (res.data) {
        toast.warning("User logged out!");
      }


    } catch (error) {

    }
    // return;
    // logOut()
    //   .then(toast.warning("User logged out!"))
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="px-3 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="LU MarketPlace"
            title="LU Marketplace"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-blue-500"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
              LU Marketplace
            </span>
          </NavLink>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/buy"
                aria-label="Buy"
                title="Buy"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Buy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sell"
                aria-label="Sell"
                title="Sell"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Sell
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                aria-label="Shop"
                title="Shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                aria-label="About us"
                title="About us"
                className={({ isActive }) =>
                  isActive
                    ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                About
              </NavLink>
            </li>
          </ul>
          <ul className="text-xl items-center hidden space-x-2 lg:flex">
            {user && user.id ? (
              <>
                {" "}
                <Link
                  to="/profile"
                  className="text-xl font-medium mr-5 text-gray-700"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0"
                >
                  Logout
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link
                    to="/register"
                    aria-label="Register"
                    title="Register"
                    className="btn btn-active btn-ghost rounded-full hover:bg-blue-500 hover:text-white"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="btn btn-active rounded-full hover:bg-blue-500 hover:text-white"
                    aria-label="Login"
                    title="Login"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* For Navbar for Mobile Devices */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <Link
                        to="/"
                        aria-label="LU Marketplace"
                        title="LU Marketplace"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-blue-500"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
                          LU Marketplace
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li className="flex">
                        <FaCartPlus className="w-8 h-8 mr-2"></FaCartPlus>
                        <NavLink
                          to="/buy"
                          aria-label="Buy"
                          title="Buy"
                          className={({ isActive }) =>
                            isActive
                              ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Buy
                        </NavLink>
                      </li>
                      <li className="flex">
                        <FaDollarSign className="w-8 h-8 mr-2"></FaDollarSign>
                        <NavLink
                          to="/sell"
                          aria-label="Sell"
                          title="Sell"
                          className={({ isActive }) =>
                            isActive
                              ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Sell
                        </NavLink>
                      </li>
                      <li className="flex">
                        <FaShopify className="w-8 h-8 mr-2"></FaShopify>
                        <NavLink
                          to="/shop"
                          aria-label="Shop"
                          title="Shop"
                          className={({ isActive }) =>
                            isActive
                              ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          Shop
                        </NavLink>
                      </li>
                      <li className="flex">
                        <FaInfoCircle className="w-8 h-8 mr-2"></FaInfoCircle>
                        <NavLink
                          to="/about"
                          aria-label="About us"
                          title="About us"
                          className={({ isActive }) =>
                            isActive
                              ? "text-xl font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "text-xl font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          About
                        </NavLink>
                      </li>
                      {user && user?.uid ? (
                        <div className="flex flex-col">
                          {" "}
                          <div className="flex mb-1">
                            <HiUserCircle className="w-8 h-8 mr-2"></HiUserCircle>
                            <Link
                              to="/profile"
                              className="text-xl font-medium mr-5 text-gray-700"
                            >
                              Profile
                            </Link>
                          </div>
                          <button
                            onClick={handleLogout}
                            className="w-24 inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base mt-4 md:mt-0"
                          >
                            Logout
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-4 h-4 ml-1"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <>
                          {" "}
                          <li className="flex">
                            <FaRegArrowAltCircleRight className="mt-2 w-8 h-8 mr-2"></FaRegArrowAltCircleRight>
                            <Link
                              to="/register"
                              aria-label="Sign up"
                              title="Sign up"
                              className="btn btn-active btn-ghost rounded-full hover:bg-blue-500 hover:text-white"
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li className="flex">
                            <FaRegArrowAltCircleRight className="mt-2 w-8 h-8 mr-2"></FaRegArrowAltCircleRight>
                            <Link
                              to="/login"
                              className="btn btn-active rounded-full hover:bg-blue-500 hover:text-white"
                              aria-label="Sign in"
                              title="Sign in"
                            >
                              Sign In
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
