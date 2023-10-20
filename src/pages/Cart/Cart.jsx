import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const Cart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  const handleDelete = (id) => {
   fetch(`http://localhost:5001/mycart/${id}`, {
    method: "DELETE"
   })
   .then(res => res.json())
   .then(data => {
      if(data.deletedCount > 0){
        const remaining = products.filter(product => product._id !== id);
        setProducts(remaining);
        toast.success('Product Deleted Successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      } else {
        toast.error('Something Went Wrong', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
   })
  };
    
  return (
    <div>
      <div className="container mx-auto px-4 py-24">
        {products?.length === 0 ? (
          <div>
            <h2 className="text-2xl text-center font-bold">
              You did not add any products to cart
            </h2>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl text-center font-bold">
              You have added{" "}
              <span className="single-text-gradient">{products?.length}</span>{" "}
              products to cart
            </h2>
            <div className="w-3/4 mx-auto">
              {/* table */}
              <div className="overflow-x-auto mt-6">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th className="text-xl">Name</th>
                      <th className="text-xl">Price</th>
                      <th className="text-xl">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}

                    {products?.map((product, index) => (
                      <tr
                        key={product?._id}
                        className="bg-base-200 hover:bg-gray-200 text-xl "
                      >
                        <th>{index + 1}</th>
                        <td>{product?.name}</td>
                        <td>{product?.price}</td>
                        <td
                          onClick={() => handleDelete(product?._id)}
                          className="text-pink-600 cursor-pointer"
                        >
                          <RiDeleteBin6Line size={25} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
