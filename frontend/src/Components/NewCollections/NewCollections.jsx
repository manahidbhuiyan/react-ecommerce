import React from 'react'
import './NewCollections.css'
import new_collcetions from '../Assets/new_collections'
import Item from '../Item/Item'

export default function NewCollections() {
  return (
    <div className='new-collcetions'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
      {new_collcetions.map((item,i) =>{
            return <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}
