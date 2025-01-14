import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product.js'

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for(let index = 0; index <= all_product.length; index ++){
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
    }
    const removeCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }

    const getTotalCartAmount = () =>{
        let totalAmont = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product) => product.id === Number(item))

                // Update the total amount
                if (itemInfo) {
                    totalAmont += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmont;
    } 
      const getTotalCartItems = () =>{
        let totalItems = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += 1
            }
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeCart, getTotalCartAmount, getTotalCartItems}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider