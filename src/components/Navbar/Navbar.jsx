import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/electonLogo.png";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast("Logged Out");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="navbar bg-base-100 py-4 ">
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
              {/* dark mode button */}

              <div>
                <div className="flex-none">
                  {/* Toggle button here */}
                  <button className="btn btn-square btn-ghost">
                    <label className="swap swap-rotate w-12 h-12">
                      <input
                        type="checkbox"
                        onChange={handleToggle}
                        // show toggle image based on localstorage theme
                        checked={theme === "light" ? false : true}
                      />
                      {/* show sun or moon icon */}
                      {theme === "light" ? (
                        <BsFillSunFill size={20} />
                      ) : (
                        <BsFillMoonStarsFill size={20} />
                      )}
                    </label>
                  </button>
                </div>
              </div>
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
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <h2 className="text-sm font-semibold">{user?.displayName}</h2>
            </div>
            <div className="ml-6 flex  space-x-1">
              {user ? (
                <Link>
                  {" "}
                  <button
                    onClick={handleSignOut}
                    type="button"
                    className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Log Out
                  </button>
                </Link>
              ) : (
                <Link to={"/login"}>
                  {" "}
                  <button
                    type="button"
                    className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    LogIn
                  </button>
                </Link>
              )}
              <div>
                <Link to={"/cart"}>
                  <AiOutlineShoppingCart
                    className="text-purple-600"
                    size={40}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
