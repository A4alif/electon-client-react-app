import React from 'react'

const PromotionCardTwo = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
            <div>
                <img className='h-[350px] card-box-shadow' src="https://i.postimg.cc/c4nMC7qx/promotion-Three.png" alt="" />
            </div>
            <div>
                <img className='h-[350px]  card-box-shadow' src="https://i.postimg.cc/9XSYc8ng/promotion-Two.png" alt="" />
            </div>
            <div>
                <img className='h-[350px]  card-box-shadow' src="https://i.postimg.cc/SxL67yNH/promotion-Four.png" alt="" />
            </div>
            <div>
                <img className='h-[350px]  card-box-shadow' src="https://i.postimg.cc/wMt5hL7k/promotion-One.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default PromotionCardTwo