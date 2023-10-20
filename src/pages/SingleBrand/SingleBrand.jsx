import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BrandCarousel from "../../components/BrandCarousel/BrandCarousel";
import ProductCard from "../../components/ProductCard/ProductCard";

const SingleBrand = () => {
  const { brandName } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/products/${brandName}`)
      .then((res) => res.json())
      .then((data) => setBrandProducts(data));
  }, []);

 

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="py-9">
          <BrandCarousel />
        </div>
        <div>
          <h2 className="capitalize text-3xl font-bold text-center py-14">
            {" "}
            <span className="single-text-gradient capitalize">
              {brandName}
            </span>{" "}
            Brand Products
          </h2>

          {brandProducts?.length === 0 ? (
            <div className="text-center text-3xl font-bold mb-24">This Brand has no product</div>
          ) : (
            <div className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {brandProducts?.map( (product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SingleBrand;
