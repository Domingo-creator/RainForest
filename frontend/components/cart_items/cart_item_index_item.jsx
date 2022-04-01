import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const CartItemIndexItem = ({cartItem, removeCartItem, index}) => {
    const handleDelete = () => {
        if(cartItem.userId) {
            removeCartItem(cartItem.userId, cartItem.id)
        } else {
            let cart = localStorage.getItem('cart')
            // localStorage.setItem('cart', cart.slice(0, index).concat(cart.slice(index1)))
        }
       
    }

    const formatPrice = () => {
        let priceArray = cartItem.price.toString().split('.')
        if(priceArray.length === 1) priceArray.push('00');
        return (
            <div className="product-price">
                <p className="product-price-money-symbol">$</p>
                <p className="product-price-dollars">{priceArray[0]}</p>
                <p className="product-price-cents">{priceArray[1]}</p>
            </div>
        )
    }

    return (
        <li>
          <Link to={`/products/${cartItem.productId}`} >
                <img src={cartItem.image_url} className="product-index-image"/>
            </Link> 
            <Link to={`/products/${cartItem.productId}`} className='product-index-name' >{cartItem.name}</Link> 
            <Link to={`/products/${cartItem.productId}`} className='product-index-price'>{formatPrice()}</Link>
            <button onClick={() => handleDelete()}>Delete</button>
        </li>
    )
}

export default CartItemIndexItem