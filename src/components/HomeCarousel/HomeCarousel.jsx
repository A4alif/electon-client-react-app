import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCreative,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeCarousel = () => {
  return (
    <div>
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
          EffectCreative,
        ]}
        spaceBetween={30}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2200,
        //   disableOnInteraction: false,
        // }}
        pagination={{ clickable: true }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        //   onSlideChange={() => console.log('slide change')}
        //   onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px] object-cover "
              src="https://i.postimg.cc/7YdfhQhT/product-Carousel-Seven.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px] object-cover "
              src="https://i.postimg.cc/ncLV1xYM/home-Carousel-Fourteen.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px] "
              src="https://i.postimg.cc/V6gJNf0Y/home-Carousel-Three.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px] "
              src="https://i.postimg.cc/448Kk3TP/product-Carousel-Eight.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px]"
              src="https://i.postimg.cc/XqvpGR99/home-Carousel-Five.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px]"
              src="https://i.postimg.cc/5tcY7kMM/home-Carousel-Two.webp"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px]"
              src="https://i.postimg.cc/YSf9Xr31/products-Carousel-Five.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[400px] object-cover"
              src="https://i.postimg.cc/W3NL9PNK/products-Carousel-Ten.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
