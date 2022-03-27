import React, { useEffect } from 'react'
const CartItemIndexItem = ({cartItem, removeCartItem, fetchProduct}) => {

    debugger
    useEffect( () => {
        fetchProduct(cartItem.productId)
    },[])

    debugger
    return (
        <li>
            {}
        </li>
    )
}

export default CartItemIndexItem