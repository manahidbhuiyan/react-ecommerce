import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <Link className='nav-item' to='/'>
        <div className="nav-logo">
         <img src={logo} alt="nav-logo" />
         <p>SHOPPER</p>
         </div>
        </Link>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}> <Link className='nav-item' to='/'>Shop</Link> {menu === 'shop' ? <hr/> : <></> }</li>
        <li onClick={() => {setMenu("mens")}}> <Link className='nav-item' to='/mens'>Mens</Link> {menu === 'mens' ? <hr/> : <></> }</li>
        <li onClick={() => {setMenu("womens")}}> <Link className='nav-item' to='/womens'>Womens</Link> {menu === 'womens' ? <hr/> : <></> }</li>
        <li onClick={() => {setMenu("kids")}}> <Link className='nav-item' to='/kids'>Kids</Link> {menu === 'kids' ? <hr/> : <></> }</li>
      </ul>
      <div className="nav-login-cart">
        <Link className='nav-item' to="/login"><button>Login</button></Link>
        <Link className='nav-item' to="/cart"><img src={cart_icon} alt="cart-icon" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}
