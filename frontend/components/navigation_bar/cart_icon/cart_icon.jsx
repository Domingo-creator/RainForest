 import React from 'react'
import { Link } from 'react-router-dom'
 const CartIcon = ({userId, createCartItem}) => {
    let cart = localStorage.getItem('cart')
    if(cart && userId) {
        JSON.parse(cart).forEach( cartItem => {
            cartItem.userId = userId
            createCartItem(userId, cartItem)
        })
        localStorage.removeItem('cart')
    }
    return (
        <div>
            <Link to='/cart'>[CART IMAGE]</Link>
            <img source="https://rainforest-dev.s3.us-west-1.amazonaws.com/cartIcon.png" />
        </div>
    )

 }
 export default CartIcon