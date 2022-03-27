import React, { useEffect } from "react"
// import CartItemIndexItem from "./cart_item_index_item"
import CartItemIndexItemContainer from "./cart_item_index_item_container"


const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, userId}) => {

    useEffect( () => {
        fetchCartItems(userId)
    },[])
    return (
        <ul>
            <li>Something</li>
            {cartItems.map( cartItem => {
                // return <CartItemIndexItem key={cartItem.id} cartItem={cartItem} removeCartItem={removeCartItem}/>
                return <CartItemIndexItemContainer key={cartItem.id} cartItem={cartItem}/>
            })}
        </ul>
    )

}

export default CartItemIndex