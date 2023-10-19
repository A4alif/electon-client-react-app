import React from 'react'

const UpdateProduct = () => {
  return (
    <>
         <div className="container mx-auto py-9">
        <div className="w-3/4 bg-[#D0E7D2] mx-auto py-9">
          <div>
            <h2 className="text-3xl font-semibold text-center">Update Product</h2>
          </div>
          <form className="px-9 pt-9">
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
                  type="number"
                  name="rating"
                  id="rating"
                  placeholder="rating"
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
                name="productTypes"
                id=""
              >
                <option value="">Select Type</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="watch">Watch</option>
                <option value="processor">Processor</option>
                <option value="tablet">Tablet</option>
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
  )
}

export default UpdateProduct