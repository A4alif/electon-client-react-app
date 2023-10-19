import React from "react";

const BrandCard = ({brand}) => {
    const {id, brandName, brandImg} = brand
  return (
    <>
      <div className="">
        <div className="card  bg-gray-100 hover:scale-105 hover:bg-gray-50 hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
          <figure className="px-10 pt-10">
            <img
              src={brandImg}
              alt="Shoes"
              className="rounded-xl h-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl capitalize">{brandName}</h2>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
