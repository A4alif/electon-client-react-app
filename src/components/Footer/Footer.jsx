import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../../assets/footerLogo.png'
const Footer = () => {
  return (
    <footer className="bg-[#08133A] text-white pt-24 pb-9">
    <div className="container mx-auto p-6 ">
      {/* grid container */}
      <div className="grid grid-cols-2 md:grid-cols-5 pb-6">
        <div className="col-span-2">
          <img className="h-14" src={footerLogo} alt="" />
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="mb-4 text-gray-300 text-lg font-semibold">
            Links
          </h2>
          <li className="list-none text-lg mb-3 text-gray-500 hover:underline font-medium">
            <Link>Add Product</Link>
          </li>
          <li className="list-none text-gray-500 hover:underline text-lg font-medium">
            <Link>My Cart</Link>
          </li>
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="mb-4 text-gray-300 text-lg font-semibold">
            Follow US
          </h2>
          <li className="list-none text-lg mb-3 text-gray-500 hover:underline font-medium">
            <Link>Facebook</Link>
          </li>
          <li className="list-none text-gray-500 hover:underline text-lg font-medium">
            <Link>Instagram</Link>
          </li>
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="mb-4 text-gray-300 text-lg font-semibold">
            Address
          </h2>
          <p className="leading-9 text-gray-500 hover:underline">
            49 West 42nd Street, New York, 4.9 mi 7.9 km from Downtown
            United States
          </p>
        </div>
      </div>
      <div className="h-px bg-gray-700 "></div>
      <div className="mt-9">
        <p className="text-center text-gray-300">
          &copy; 2023 Electon All Rights Reserved{" "}
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer