import React, { useEffect } from "react"
import { removeCartItem } from "../../actions/cart_item_actions"
import CartItemIndexItem from "./cart_item_index_item"


const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, userId}) => {

    useEffect( () => {
        fetchCartItems(userId)
    },[])
    debugger
    return (
        <ul>
            <li>Something</li>
            {cartItems.map( cartItem => {
                <CartItemIndexItem cartItem={cartItem} removeCartItem={removeCartItem}/>
            })}
        </ul>
    )

}

export default CartItemIndex