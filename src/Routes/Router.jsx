import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SingleBrand from "../pages/SingleBrand/SingleBrand";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><AddProduct /></PrivateRoute>,
      },
      {
        path: "/updateproduct/:id",
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
      {
        path: "/cart",
        element: <Cart />,
        loader: () => fetch("http://localhost:5001/myCart")
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ],
  },
]);

export default router;
