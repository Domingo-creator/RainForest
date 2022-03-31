import React, { useEffect } from 'react'
const CartItemIndexItem = ({cartItem, removeCartItem}) => {
    
    return (
        <li>
            <p>{cartItem.image_url}</p>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
        </li>
    )
}

export default CartItemIndexItem