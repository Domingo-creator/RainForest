 import React from 'react'
 const CartIcon = ({userId, createCartItem}) => {
    let cart = localStorage.getItem('cart')
    if(cart && userId) {
        JSON.parse(cart).forEach( cartItem => {
            cartItem.userId = userId
            createCartItem(userId, cartItem)
        })
    }
    return (
        <div>
            <p>Cart Image</p>
        </div>
    )

 }
 export default CartIcon