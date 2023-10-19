import React from "react";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-9 pb-9">
        <div className="col-span-3">
          <HomeCarousel />
        </div>
        <div className="col-span-2">Right Side</div>
      </div>
    </div>
  );
};

export default Home;
