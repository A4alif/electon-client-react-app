import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel'

const Banner = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-9 pb-9">
        <div className="col-span-3">
          <HomeCarousel />
        </div>
        <div className="col-span-2">
          <div className="h-[198px] mb-2">
            <img className="h-full" src="https://i.postimg.cc/7YWT7Zsh/home-Banner-One.jpg" alt="" />
          </div>
          <div className="h-[198px]">
            <img className="h-full" src="https://i.postimg.cc/Xv3gFsyk/homeright.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner