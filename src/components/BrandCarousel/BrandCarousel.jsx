import React from 'react'
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
const BrandCarousel = () => {
  return (
    <>
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
              className="w-full h-[450px]"
              src="https://i.postimg.cc/28V1zfkD/product-Carousel-One.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[450px]"
              src="https://i.postimg.cc/YSf9Xr31/products-Carousel-Five.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[450px]"
              src="https://i.postimg.cc/K8T4Mr3p/product-Carousel-Three.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[450px] object-cover"
              src="https://i.postimg.cc/LX2qRYXC/home-Carousel-One.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[450px] "
              src="https://i.postimg.cc/hGbRbGBT/products-Carousel-Nine.png"
              alt=""
            />
          </div>
        </SwiperSlide>
       
       
       
      </Swiper>
        </div>
    </>
  )
}

export default BrandCarousel