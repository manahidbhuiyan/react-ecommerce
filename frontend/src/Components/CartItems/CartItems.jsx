import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeCart } = useContext(ShopContext);

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div>
        
        {
        // eslint-disable-next-line
        all_product.map((e) => {
            // eslint-disable-next-line
          if (cartItems[e.id] > 0) {
            return (
                <div>
                                  <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="cartItems-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItems-quantity">{cartItems[e.id]} </button>
                <p>${e.new_price * (cartItems[e.id])}</p>
                <img className="cartItems-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => removeCart(e.id)}
                />
              </div>
                <hr />
                </div>
            );
          }
          return null;
        })}
        <div className="cartItems-down">
            <div className="cartItems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartItems-total-item">
                        <p>Subtotal</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartItems-total-item">
                        <h3>Total</h3>
                        <p>${0}</p>
                    </div>
                </div>
                
                <button>PROCEED TO CHECKOUT</button>
            </div>
        <div className="cartItems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartItems-promobox">
                <input type="text" placeholder="promo code" />
                <button>submit</button>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
