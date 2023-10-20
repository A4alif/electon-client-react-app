import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="py-9  flex flex-col lg:flex-row items-center ">
            <div className=" w-3/4 lg:w-1/2">
              <div className="card w-full lg:w-3/4 mx-auto bg-base-100 shadow-xl">
                <div className="p-8  ">
                  <div className="flex justify-center">
                    <h2 className="card-title text-2xl font-semibold mb-6">
                      {" "}
                      Welcome to{" "}
                      <span className="single-text-gradient">Electon</span>{" "}
                    </h2>
                  </div>
                  <p className="text-center text-xl font-semibold mb-4">
                    Please Register
                  </p>
                  <form>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                      />
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="photourl"
                      >
                        Photo URL
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        type="text"
                        name="photourl"
                        id="photourl"
                        placeholder="photourl"
                      />
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                      />
                    </div>
                    <div className="w-3/4 mx-auto mb-4 ">
                      <label
                        className="block text-xl mb-4 font-semibold"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="bg-gray-200 w-full py-2 px-2 rounded-md focus:outline-none "
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                      />
                    </div>
                    <div className="w-3/4 mx-auto mb-4 mt-6 ">
                      <button
                        type="submit"
                        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-full "
                      >
                        Register
                      </button>
                    </div>
                    <div className="w-3/4 mx-auto mb-4 mt-6 ">
                      <p>
                        Already have an account? Please{" "}
                        <Link to={"/login"}>
                          {" "}
                          <span className="text-blue-500 underline">
                            Login
                          </span>{" "}
                        </Link>{" "}
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className=" w-3/4 lg:w-1/2">
              <img
                src="https://i.postimg.cc/d0GHhfSB/register-Illustrationno-BG.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
