import React, { useEffect } from 'react'
const CartItemIndexItem = ({cartItem, product, removeCartItem, fetchProduct}) => {

    useEffect( () => {
        fetchProduct(cartItem.productId)
    },[])

    if(!product) {
        return <></>
    }
    return (
        <li>
            {product.name}
        </li>
    )
}

export default CartItemIndexItem