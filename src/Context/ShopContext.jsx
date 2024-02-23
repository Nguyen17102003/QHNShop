import React, { createContext, useState, useEffect } from 'react'
import all_product from '../Components/Assets/all_product'
export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {}
    let sizes = ['S', 'M', 'L', 'XL', 'XXL']
    for(let i = 0; i < all_product.length + 1; i++)
        for(let j = 0; j < sizes.length; j++)
        {
            cart[`${sizes[j]}_${i}`] = {}
        }
    return cart
}
const ShopContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = sessionStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : getDefaultCart()
    })
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const getItemToCart = (itemId, value) => {
        setCartItems((prev) => ({...prev, [itemId]: value}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0}))
    }
    const changeQuantity = (itemId, value) => {
        setCartItems((prev) => ({...prev, [itemId]: value}))
    }
    const getTotalCartAmount = () => {
        let total = 0
        for(const item in cartItems)
        {
            if(cartItems[item].hasOwnProperty('quantity') && cartItems[item].hasOwnProperty('new_price'))
                if(cartItems[item]['quantity'] > 0)
                {
                    total += cartItems[item]['new_price'] * cartItems[item]['quantity']
                }
        }
        return total
    }
    const getTotalCartItems = () => {
        let totalItems = 0
        for(const item in cartItems)
        {
            if(cartItems[item].hasOwnProperty('quantity'))
                if(cartItems[item]['quantity'] > 0)
                    totalItems += Number(cartItems[item]['quantity'])
        }
        return totalItems
    }
    const contextValue = {
        all_product, cartItems, 
        addToCart, removeFromCart, 
        changeQuantity, getTotalCartAmount,
        getTotalCartItems, getItemToCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider