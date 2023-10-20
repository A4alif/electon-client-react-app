import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5001/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  const {
    _id,
    brand,
    description,
    photoUrl,
    price,
    productType,
    rating,
    sku,
    warranty,
    name,
  } = product;
  return (
    <div>
      <div className="container mx-auto  ">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-24 place-items-center  ">
            <div className="card-box-shadow">
              <img src={photoUrl} alt="" />
            </div>
            <div className="col-span-2">
              <div className="card  bg-[#d0e7d2b9]">
                <div className="p-12">
                  <h2 className="card-title text-2xl text-slate-600">{name}</h2>
                  <div className="flex space-x-3 mt-4 ">
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
                  <div className="mt-6 text-sm text-gray-700 leading-8">
                    <p className="">{description}</p>
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <p className="px-2 py-2 bg-gray-50 text-slate-950 text-sm rounded-lg">
                      Status:{" "}
                      <span className="text-green-600 font-bold">
                        Stock Available
                      </span>{" "}
                    </p>
                    <p className="px-2 py-2 bg-gray-50 text-slate-950 text-sm rounded-lg font">
                      SKU:{" "}
                      <span className="text-slate-600 font-bold">{sku}</span>{" "}
                    </p>
                    <p className="px-2 py-2 bg-gray-50 text-slate-950 text-sm rounded-lg font">
                      Price:${" "}
                      <span className="text-slate-600 font-bold">{price}</span>{" "}
                    </p>
                  </div>
                  <div className="flex mt-4">
                    <p className="px-2 py-2 bg-gray-50 text-slate-950 text-sm rounded-lg font">
                      Warranty::{" "}
                      <span className="text-slate-600 font-bold">
                        {warranty} Year of Service Warranty
                      </span>{" "}
                    </p>
                  </div>
                  <div className="my-6">
                    <p>Rating: {rating}</p>
                  </div>
                  <div className="mt-4">
                  <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
               Add to Cart
              </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
