import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data) => {
    const {
      name,
      brandName,
      description,
      photoUrl,
      price,
      productType,
      rating,
      sku,
      warranty,
    } = data;
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

    fetch("https://electon-server.vercel.app/products", {
      method: "Post",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productInfo)
    })
    .then( res => res.json())
    .then( data => {
      if(data.insertedId){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Product Added Successfully',
         
        })
        reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Something Went Wrong',
         
        })
      }
    })
    
  };

  return (
    <>
      <div className="container mx-auto py-9">
        <div className="w-3/4 bg-[#D0E7D2] mx-auto py-9">
          <div>
            <h2 className="text-3xl font-semibold text-center">Add Product</h2>
          </div>
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="px-9 pt-9"
            noValidate
          >
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
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="product name"
                />
                <p className="text-red-500 pt-1">{errors.name?.message}</p>
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
                  {...register("brandName", {
                    required: {
                      value: true,
                      message: "Brand Name is Required",
                    },
                  })}
                  type="text"
                  name="brandName"
                  id="brandName"
                  placeholder="brand name"
                />
                <p className="text-red-500 pt-1">{errors.brandName?.message}</p>
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
                  {...register("photoUrl", {
                    required: {
                      value: true,
                      message: "Photo Url  is Required",
                    },
                  })}
                  type="text"
                  name="photoUrl"
                  id="photoUrl"
                  placeholder="photoUrl"
                />
                <p className="text-red-500 pt-1">{errors.photoUrl?.message}</p>
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
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price  is Required",
                    },
                  })}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="price"
                />
                <p className="text-red-500 pt-1">{errors.price?.message}</p>
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
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Description  is Required",
                    },
                  })}
                  type="text"
                  name="description"
                  id="description"
                  placeholder="description"
                />
                <p className="text-red-500 pt-1">
                  {errors.description?.message}
                </p>
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
                  {...register("rating", {
                    required: {
                      value: true,
                      message: "Rating  is Required",
                    },
                  })}
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="rating"
                />
                <p className="text-red-500 pt-1">{errors.rating?.message}</p>
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
                  {...register("sku", {
                    required: {
                      value: true,
                      message: "Sku number  is Required",
                    },
                  })}
                  type="text"
                  name="sku"
                  id="sku"
                  placeholder="sku number"
                />
                <p className="text-red-500 pt-1">{errors.sku?.message}</p>
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
                  {...register("warranty", {
                    required: {
                      value: true,
                      message: "Warranty  is Required",
                    },
                  })}
                  type="number"
                  name="warranty"
                  id="warranty"
                  placeholder="warranty"
                />
                <p className="text-red-500 pt-1">{errors.warranty?.message}</p>
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
                {...register("productType", {
                  required: {
                    value: true,
                    message: "Select Product Type ",
                  },
                })}
                name="productType"
                id="productType"
              >
                <option value="">Select Type</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="watch">Watch</option>
                <option value="processor">Processor</option>
                <option value="tablet">Tablet</option>
                <option value="camera">Camera</option>
              </select>
              <p className="text-red-500 pt-1">{errors.productType?.message}</p>
            </div>
            <div className="mt-9">
              <button
                type="submit"
                className="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
