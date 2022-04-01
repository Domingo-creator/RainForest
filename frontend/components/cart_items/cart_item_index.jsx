import React, { useEffect } from "react"
import CartItemIndexItem from "./cart_item_index_item"

const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, userId}) => {

    useEffect( () => {
        if(userId) fetchCartItems(userId)
    },[])

    const cartItemList = () => {
        if(userId && cartItems.length) {
            return cartItems.map( (cartItem,index) => {
                return <CartItemIndexItem key={cartItem.id} index={index} cartItem={cartItem} removeCartItem={removeCartItem}/>
            })
        } else if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).map( (cartItem, index) => {
                return <CartItemIndexItem key={index} index={index} cartItem={cartItem} removeCartItem={removeCartItem}/>
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
        <ul className='cart-list'>
            <h1>Shopping Cart</h1>
            {cartItemList()}
        </ul>
    )
}

export default CartItemIndex