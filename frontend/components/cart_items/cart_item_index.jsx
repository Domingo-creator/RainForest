import React, { useEffect } from "react"
import CartItemIndexItem from "./cart_item_index_item"

const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, userId}) => {

    useEffect( () => {
        if(userId) fetchCartItems(userId)
    },[])

    const cartItemList = () => {
        if(userId && cartItems.length) {
            return cartItems.map( cartItem => {
                return <CartItemIndexItem key={cartItem.id} cartItem={cartItem} removeCartItem={removeCartItem}/>
            })
        } else if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).map( cartItem => {
                return <CartItemIndexItem key={cartItem.productId} cartItem={cartItem} removeCartItem={removeCartItem}/>
            })
        } else {
            return (
                <div>
                    <h1>Your Cart is Empty</h1>
                </div>
            )
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