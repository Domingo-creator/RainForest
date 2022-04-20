import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const CartItemIndexItem = ({cartItem, removeCartItem, updateCartItem, cartItemsSelected, setCartItemsSelected}) => {
    const handleDelete = () => {
        if(cartItem.userId) {
            removeCartItem(cartItem.userId, cartItem.id)
        } else {
            let cart = sessionStorage.getItem('cart')
            // sessionStorage.setItem('cart', cart.slice(0, index).concat(cart.slice(index1)))
        }
       
    }

    const formatPrice = () => {
        let priceArray = cartItem.price.toString().split('.')
        if(priceArray.length === 1) priceArray.push('00');
        return (
            <div className="product-price">
                <p className="cart-item-price">$</p>
                <p className="cart-item-price">{priceArray[0]}.</p>
                <p className="cart-item-price">{priceArray[1]}</p>
            </div>
        )
    }

    const updateQuantity = (e) => {
        // cartItem.quantity = e.target.value;
        let updatedCartItem = Object.assign({}, cartItem)
        updatedCartItem.quantity = parseInt(e.target.value)
        
        updateCartItem(updatedCartItem);
    }

    const updateSelected = () => {
        let newSelected = Object.assign({}, cartItemsSelected)
        if(cartItemsSelected[cartItem.id]) {
            newSelected[cartItem.id] = false
        }  else {
            newSelected[cartItem.id] = true
        } 
        setCartItemsSelected(newSelected)
    }

    
    return (
        <li>
            <input 
                type='checkbox' 
                checked={cartItemsSelected[cartItem.id] ? true : false}
                onChange={updateSelected}
                className='cart-item-checkbox'
                />
            <Link to={`/products/${cartItem.productId}`} >
                <img src={cartItem.image_url} className="product-index-image"/>
            </Link> 
            <div className="cart-item-main">
                <Link to={`/products/${cartItem.productId}`} className='product-index-name' >{cartItem.name}</Link> 
                <div className='cart-item-options'>
                    <select 
                        name="quantity" 
                        id="product-quantity"
                        value={cartItem.quantity}
                        onChange={(e) => updateQuantity(e)}>
                            <option value={1}>Qty: 1</option>     
                            <option value={2}>Qty: 2</option>     
                            <option value={3}>Qty: 3</option>     
                            <option value={4}>Qty: 4</option>     
                            <option value={5}>Qty: 5</option>     
                            <option value={6}>Qty: 6</option>     
                            <option value={7}>Qty: 7</option>     
                            <option value={8}>Qty: 8</option>     
                            <option value={9}>Qty: 9</option>     
                            <option value={10}>Qty: 10</option>     
                    </select>
            
                    <p onClick={() => handleDelete()}>Delete</p>
                    <p onClick={() => saveForLater()}>Save for later</p>
                </div>
            </div>
                <Link to={`/products/${cartItem.productId}`} className='product-index-price'>{formatPrice()}</Link>
          
        </li>
    )
}

export default CartItemIndexItem