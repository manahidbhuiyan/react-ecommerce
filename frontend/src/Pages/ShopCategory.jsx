import React, { useContext } from 'react'
import './css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


export default function ShopCategory(props) {

  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>

      <img className='shopCategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCaregory-products">
        {all_product.map((item,i) =>{
          if(props.category === item.category){
            return <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null
          }
        })}
      </div>
      <div className="shopCategory-loadMore">
        Explore More
      </div>
    </div>
  )
}
