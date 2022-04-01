 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 const CartIcon = ({userId, cartItems, createCartItem, fetchCartItems}) => {
    const [rerender, setRerender] = useState('')

    let cart = localStorage.getItem('cart')
    if(cart && userId) {
        JSON.parse(cart).forEach( cartItem => {
            cartItem.userId = userId
            createCartItem(userId, cartItem)
        })
        localStorage.removeItem('cart')
    }

    useEffect( () => {
        if(userId) fetchCartItems(userId) 
    },[])

    const cartItemCount = () => {
        if(userId) return cartItems.length
        // let cartCount = 
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0
        // setRerender(cartCount)
    }

    return (
        <div>
            <Link to='/cart' >
                <p className="cart-count">{cartItemCount()}</p>
                <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/cartIcon.png" className="carticon"/>
            </Link>
        </div>
    )

 }
 export default CartIcon