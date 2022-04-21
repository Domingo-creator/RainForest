import React, { useState } from "react"
import {Link} from 'react-router-dom'

const ProductPurchaseWindow = ({userId, product, createCartItem, updateCartItem, formatPrice, cartItems, setSessionStorageUpdate, history}) => {

    const [quantity, setQuantity] = useState('1')

    const update = (e) => {
        setQuantity(e.target.value)
    }

    const getNextDeliveryTime = () => {
        let deliveryTime = new Date
        deliveryTime.getMinutes()
        return `${deliveryTime.getHours() % 12} hours, ${60 - deliveryTime.getMinutes()} minutes`
    }


    const formatDeliveryDate = (deliveryDelay = product.id * 5 % 3 + 1) => {
        let deliveryDate = new Date
        deliveryDate.setDate(deliveryDate.getDate() + deliveryDelay)
        deliveryDate = deliveryDate.toDateString().split(' ')
        deliveryDelay === 1 ? deliveryDate[0] = 'Tomorrow' : deliveryDelay === 0 ? deliveryDate[0] = 'Today' : null;
        deliveryDate[0] += ','
        return deliveryDate.slice(0, 3).join(' ') 
    }

    const findMatchingCartItem = (currentCart) => {
        for(let i = 0; i < currentCart.length; i++) {
            if(currentCart[i].productId === product.id) {
                return currentCart[i]
            }
        }
        return null
    }

    const handleAddToCart = () => {
        let cartItem = Object.assign( {}, {userId: userId, productId: product.id, quantity: parseInt(quantity)})
        if(userId) {
            let matchingCartItem = findMatchingCartItem(cartItems);
            if(findMatchingCartItem(cartItems)) {
                matchingCartItem.quantity = matchingCartItem.quantity + parseInt(quantity)
                updateCartItem(matchingCartItem)
            } else {
                createCartItem(userId, cartItem);
            }
        } else {
            let prevCart;
            if(sessionStorage.getItem('cart') === '') {
                prevCart = []
            } else {
                prevCart = JSON.parse(sessionStorage.getItem('cart'))
            }
            let matchingCartItem = findMatchingCartItem(prevCart)
            if(matchingCartItem) {
                matchingCartItem.quantity += parseInt(quantity)
            } else {
                cartItem.name = product.name
                cartItem.price = product.price
                cartItem.image_url = product.image_url
                prevCart.push(cartItem)
                // createNoUserCartItem(cartItem)
            }
            sessionStorage.setItem('cart', JSON.stringify(prevCart))
            setSessionStorageUpdate(Math.random() * 1000)
        }
    }

    const handleBuyNow = () => {
        
        // openModal('buy_now');
    }

    return (
        <div className="product-purchase-window">
            <div className="product-purchase-window-price">
                {formatPrice()}
                <p className="product-purchase-window-returns">& <span className='fake-link'>Free Returns</span></p>
            </div>
            <div className="product-purchase-window-delivery-info">
                <p >FREE delivery <strong>{formatDeliveryDate()}</strong></p>
                <p>Order within <span className="product-purchase-window-delivery-cutoff">{getNextDeliveryTime()}</span></p>
            </div>
            <h2 className="product-purchase-window-stock-status">In Stock.</h2>
            
            <select 
              name="quantity" 
              id="product-quantity"
              value={quantity}
              onChange={update}>
                <option value={1}>Qty: 1</option>     
                <option value={2}>Qty: 2</option>     
                <option value={3}>Qty: 3</option>     
                <option value={4}>Qty: 4</option>     
                <option value={5}>Qty: 5</option>     
                <option value={6}>Qty: 6</option>     
                <option value={7}>Qty: 7</option>     
                <option value={8}>Qty: 8</option>     
                <option value={9}>Qty: 9</option>     
                <option value={10}>Qty: 10+</option>     
            </select>

            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
            <button onClick={() => history.push(`/cart/checkout/${product.id}`)} className="buy-now-button">Buy Now</button>
            {/* <Link to={`/cart/checkout/${product.id}`} className="buy-now-button">Buy Now</Link> */}
        </div>
    )
}

export default ProductPurchaseWindow