import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <header className="bg-gray-100 py-2">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
