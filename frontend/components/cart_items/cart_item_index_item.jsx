import React, { useEffect } from 'react'
const CartItemIndexItem = ({cartItem, removeCartItem, index}) => {
    const handleDelete = () => {
        if(cartItem.userId) {
            removeCartItem(cartItem.userId, cartItem.id)
        } else {
            let cart = localStorage.getItem('cart')
            // localStorage.setItem('cart', cart.slice(0, index).concat(cart.slice(index1)))
        }
        
    }

    return (
        <li>
            <img src={cartItem.image_url}/>
            <p>{cartItem.name}</p>
            <p>{cartItem.price}</p>
            <button onClick={() => handleDelete()}>Delete</button>
        </li>
    )
}

export default CartItemIndexItem