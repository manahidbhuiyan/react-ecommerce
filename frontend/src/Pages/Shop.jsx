import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers.jsx';
import PopularProduct from '../Components/PopularProduct/PopularProduct.jsx';


const Shop = () => {
  return (
    <div>
      <Hero/>
      <PopularProduct />
      <Offers />
    </div>
  )
}

export default Shop
