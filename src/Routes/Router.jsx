import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleBrand from "../pages/SingleBrand/SingleBrand";

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
        path: "/brand/:brandName",
        element: <SingleBrand />,
      },
    ],
  },
]);

export default router;
