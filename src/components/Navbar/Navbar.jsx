import React from "react";
import profile from "../../assets/profile-pic.jpg";
import logo from "../../assets/electonLogo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="navbar py-4 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 underline"
                        : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addproduct"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-600 underline"
                        : ""
                    }
                  >
                    Add Product
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center space-x-4">
              <div>
                <img className="h-16 hidden md:block" src={logo} alt="" />
              </div>
              <h2 className="text-2xl font-bold md:text-3xl single-text-gradient">
                Electon
              </h2>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-2xl font-semibold space-x-8">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-600 underline"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-600 underline"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex flex-row items-center space-x-4">
              <div>
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={profile}
                  alt=""
                />
              </div>
              <h2 className="text-sm font-semibold">Alif Hasan Shah</h2>
            </div>
            <div className="ml-6 flex  space-x-1">
              <button
                type="button"
                className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
              >
                LogIn
              </button>
              <div>
                <Link to={'/cart'}><p> <AiOutlineShoppingCart className="text-purple-600" size={40} /></p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
