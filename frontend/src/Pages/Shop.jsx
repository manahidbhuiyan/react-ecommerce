import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers.jsx';
import PopularProduct from '../Components/PopularProduct/PopularProduct.jsx';
import NewCollections from '../Components/NewCollections/NewCollections.jsx';
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx';


const Shop = () => {
  return (
    <div>
      <Hero/>
      <PopularProduct />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  )
}

export default Shop
