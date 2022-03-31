import React, { useEffect } from "react"
import CartItemIndexItem from "./cart_item_index_item"

const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, userId}) => {

    useEffect( () => {
        if(userId) fetchCartItems(userId)
    },[])

    const cartItemList = () => {
        if(userId) {
            return cartItems.map( cartItem => {
                return <CartItemIndexItem key={cartItem.id} cartItem={cartItem} removeCartItem={removeCartItem}/>
            })
        } else {
            return JSON.parse(localStorage.getItem('cart')).map( cartItem => {
                return <CartItemIndexItem key={cartItem.productId} cartItem={cartItem} removeCartItem={removeCartItem}/>
            })
        }
    }

    return (
        <ul>
            <h1>Your Cart</h1>
            {cartItemList()}
        </ul>
    )
}

export default CartItemIndex