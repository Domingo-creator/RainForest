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
        let count = 0;
        if(userId) {
            cartItems.forEach( cartItem => count += cartItem.quantity)
        } else if( localStorage.getItem('cart') ) {
            JSON.parse(localStorage.getItem('cart')).forEach( cartItem => { debugger;
                count += cartItem.quantity} )
        }
        return count;
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