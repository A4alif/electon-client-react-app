import React from 'react'
import { useParams } from 'react-router-dom'
import BrandCarousel from '../../components/BrandCarousel/BrandCarousel';

const SingleBrand = () => {
    const {brandName} = useParams();
    
  return (
    <>
        <div className='container mx-auto px-4'>
            <div className='py-9'>
                <BrandCarousel />
            </div>
            <div>
                <h2 className='capitalize text-3xl font-bold text-center py-14'> <span className='single-text-gradient capitalize'>{brandName}</span> Brand Products</h2>
            </div>
        </div>
    </>
  )
}

export default SingleBrand