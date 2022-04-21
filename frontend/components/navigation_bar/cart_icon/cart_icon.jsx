 import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 const CartIcon = ({userId, cartItems, createCartItem, fetchCartItems, sessionStorageUpdate}) => {
    const [rerender, setRerender] = useState('')
    const [storageUpdate, setStoragetUpdate] = useState(sessionStorageUpdate)

    let cart = sessionStorage.getItem('cart')

    // debugger
    if(cart && userId) {
        JSON.parse(cart).forEach( cartItem => {
            cartItem.userId = userId
            createCartItem(userId, cartItem)
        })
        sessionStorage.removeItem('cart')
    }

    useEffect( () => {
        if(userId) fetchCartItems(userId) 
    },[])

    // useEffect( () => {
    //     // if( sessionStorage.getItem('cart') ) {
    //     //     JSON.parse(sessionStorage.getItem('cart')).forEach( cartItem => count += cartItem.quantity )
    //     // }
    //    debugger
    // },[sessionStorageUpdate])

    const cartItemCount = () => {
        let count = 0;
        if(userId) {
            cartItems.forEach( cartItem => count += cartItem.quantity)
        } else if( sessionStorage.getItem('cart') ) {
            JSON.parse(sessionStorage.getItem('cart')).forEach( cartItem => { 
                count += cartItem.quantity} )
        }
        return count;
    }

    return (
        <div>
            <Link to='/cart' className="cart-count-container" >
                <div>
                    <p className="cart-count">{cartItemCount()}</p>
                    <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/cartIcon.png" className="carticon"/>
                </div>
                    <p>cart</p>
            </Link>
            
        </div>
    )

 }
 export default CartIcon