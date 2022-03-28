import React, { useEffect } from "react"
import { fetchProducts } from "../../actions/product_actions"
import CartItemIndexItem from "./cart_item_index_item"
import CartItemIndexItemContainer from "./cart_item_index_item_container"


const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, userId, fetchProduct}) => {

    useEffect( () => {
        // debugger
        fetchCartItems(userId)
    },[])

    useEffect( () => {
        fetchProducts(createFilter)
    },[cartItems])

    const createFilter = () => {
        let filter = cartItems.map(cartItem => `id = ${cartItem.productId}`)
        return filter.join(' OR ')
    }

    return (
        <ul>
            <li>Something</li>
            {cartItems.map( cartItem => {
                return <CartItemIndexItem key={cartItem.id} cartItem={cartItem} removeCartItem={removeCartItem} fetchProduct={fetchProduct}/>
                // return <CartItemIndexItemContainer key={cartItem.id} cartItem={cartItem}/>
            })}
        </ul>
    )

}

export default CartItemIndex