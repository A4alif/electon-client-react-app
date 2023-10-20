import React from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import PromotionCardOne from "../../components/Promotion/PromotionCardOne";
import PromotionCardTwo from "../../components/Promotion/PromotionCardTwo";
import PromotionCardThree from "../../components/Promotion/PromotionCardThree";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <Banner />
      <PromotionCardOne />
      <Brands />
      <div className="my-24">
        <PromotionCardTwo />
      </div>
      <div className="mb-24">
        <PromotionCardThree />
      </div>
    </div>
  );
};

export default Home;
