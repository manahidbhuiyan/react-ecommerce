import React from 'react'
import './PopularProduct.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

export default function PopularProduct() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i) =>{
            return <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
