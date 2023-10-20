import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    brand,
    description,
    photoUrl,
    price,
    productType,
    rating,
    sku,
    warranty,
  } = product;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure className="py-6">
          <img
            className="h-[350px] w-[450px] object-cover  "
            src={photoUrl}
            alt="Shoes"
          />
        </figure>
        <div className="px-8 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="card-title ">{name}</h2>
            <p >Rating:{rating}</p>
          </div>
          <div className="flex space-x-3 ">
            <div>
              <button className="px-4 py-2 rounded-full bg-[#EAF4FD] text-[#3197E9] text-sm font-semibold">
                {brand}
              </button>
            </div>
            <div>
              <button className="px-4 py-2 rounded-full bg-[#FEF0E8] text-[#F26E21] text-sm font-semibold">
                {productType}
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-400">
              {description.length > 100 ? description.slice(0, 100) + "..." : description}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-lg text-gray-500 font-bold">
              Price: $<span className="single-text-gradient">{price}</span>{" "}
            </p>
          </div>
          <div className="flex justify-around mt-4">
            <div>
             <Link to={`/product/${_id}`} > <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                See Details
              </button></Link>
            </div>
            <div>
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Update Info{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
