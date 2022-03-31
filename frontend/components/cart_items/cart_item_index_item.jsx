import React, { useEffect } from 'react'
const CartItemIndexItem = ({cartItem, removeCartItem}) => {
    // debugger
    const handleDelete = () => {
        removeCartItem(cartItem.userId, cartItem.id)
        
    }

    return (
        <li>
            <p>{cartItem.image_url}</p>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <button onClick={() => handleDelete()}>Delete</button>
        </li>
    )
}

export default CartItemIndexItem