import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div>
      <header className="bg-base-100 py-2">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />

    </div>
  );
};

export default Root;
