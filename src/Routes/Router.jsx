import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleBrand from "../pages/SingleBrand/SingleBrand";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/updateproduct",
        element: <UpdateProduct />,
      },
      {
        path: "/brand/:brandName",
        element: <SingleBrand />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      },
    ],
  },
]);

export default router;
