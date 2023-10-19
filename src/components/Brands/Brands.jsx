import React, { useEffect, useState } from 'react'
import BrandCard from './BrandCard'

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect( () => {
        fetch("./brands.json")
        .then( res => res.json())
        .then( data => setBrands(data))
    }, [])
  return (
    <>
        <div className='my-9'>
            <h2 className='text-3xl font-semibold text-center py-9 mb-9'>Unleash Innovation with our Diverse <span className='single-text-gradient'>brand Selection!</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-9'>
               {
                brands.map( (brand) => (
                    <BrandCard key={brand.id} brand={brand} />
                ))
               }
            </div>
        </div>
    </>
  )
}

export default Brands