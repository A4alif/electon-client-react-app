import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5001/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const description = form.description.value;
    const photoUrl = form.photoUrl.value;
    const price = form.price.value;
    const productType = form.productType.value;
    const rating = form.rating.value;
    const sku = form.sku.value;
    const warranty = form.warranty.value;

    const brandname = brandName.toLowerCase();

    const productInfo = {
      name,
      brand: brandname,
      description,
      photoUrl,
      price,
      productType,
      rating,
      sku,
      warranty,
    };

    fetch(`http://localhost:5001/updateproduct/${product?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Product Updated",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "SomeThing Went Wrong",
          });
        }
      });
  };
  return (
    <>
      <div className="container mx-auto py-9">
        <div className="w-3/4 bg-[#D0E7D2] mx-auto py-9">
          <div>
            <h2 className="text-3xl font-semibold text-center">
              Update Product
            </h2>
          </div>
          <form onSubmit={handleUpdateProduct} className="px-9 pt-9">
            <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="product name"
                />
              </div>
              <div className=" w-full lg:w-1/2">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="brandName"
                >
                  Brand Name
                </label>
                <input
                  className="w-full  py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.brand}
                  type="text"
                  name="brandName"
                  id="brandName"
                  placeholder="brand name"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="photoUrl"
                >
                  Image
                </label>
                <input
                  className="w-full py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.photoUrl}
                  type="text"
                  name="photoUrl"
                  id="photoUrl"
                  placeholder="photoUrl"
                />
              </div>
              <div className=" w-full lg:w-1/2">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="w-full  py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="price"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="description"
                >
                  Short Description
                </label>
                <input
                  className="w-full py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.description}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                />
              </div>
              <div className=" w-full lg:w-1/2">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <input
                  className="w-full  py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.rating}
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="rating"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="sku"
                >
                  SKU
                </label>
                <input
                  className="w-full py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.sku}
                  type="text"
                  name="sku"
                  id="sku"
                  placeholder="sku number"
                />
              </div>
              <div className=" w-full lg:w-1/2">
                <label
                  className="block text-xl mb-2 font-semibold"
                  htmlFor="warranty"
                >
                  Warranty
                </label>
                <input
                  className="w-full  py-2 px-3 focus:outline-none rounded-md text-md font-normal"
                  defaultValue={product.warranty}
                  type="number"
                  name="warranty"
                  id="warranty"
                  placeholder="warranty"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="productTypes"
                className="font-semibold text-lg mr-4"
              >
                Select Product Types{" "}
              </label>
              <select
                className="w-40 py-2 rounded-md focus:outline-none"
                name="productType"
                id="productType"
                required
              >
                <option value="">Select Type</option>
                <option name="productType" value="phone">
                  Phone
                </option>
                <option name="productType" value="computer">
                  Computer
                </option>
                <option name="productType" value="watch">
                  Watch
                </option>
                <option name="productType" value="processor">
                  Processor
                </option>
                <option name="productType" value="tablet">
                  Tablet
                </option>
                <option name="productType" value="camera">
                  Camera
                </option>
              </select>
            </div>
            <div className="mt-9">
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
