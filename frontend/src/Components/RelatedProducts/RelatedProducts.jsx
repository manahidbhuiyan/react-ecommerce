import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data.js'
import Item from '../Item/Item.jsx'

const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedProducts-item">
        {data_product.map((item,i) =>{
            return <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
