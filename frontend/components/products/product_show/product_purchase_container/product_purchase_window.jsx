import React, { useState } from "react"

const ProductPurchaseWindow = ({userId, product, createCartItem, updateCartItem, formatPrice, cartItems}) => {

    const [quantity, setQuantity] = useState('1')

    const update = (e) => {
        setQuantity(e.target.value)
    }

    const getNextDeliveryTime = () => {

    }

    const getDeliveryDate = () => {

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
            if(localStorage.getItem('cart') === '') {
                prevCart = []
            } else {
                prevCart = JSON.parse(localStorage.getItem('cart'))
            }
            let matchingCartItem = findMatchingCartItem(prevCart)
            if(matchingCartItem) {
                matchingCartItem.quantity += parseInt(quantity)
            } else {
                cartItem.name = product.name
                cartItem.price = product.price
                cartItem.image_url = product.image_url
                prevCart.push(cartItem)
            }
            localStorage.setItem('cart', JSON.stringify(prevCart))
        }
    }

    const handleBuyNow = () => {

    }

    return (
        <div className="product-purchase-window">
            <div className="product-purchase-window-price">
                {formatPrice()}
                <p className="product-purchase-window-returns">& <span className='fake-link'>Free Returns</span></p>
            </div>
            <div className="product-purchase-window-delivery-info">
                <p>FREE delivery {getDeliveryDate()}</p>
                <p>Order within {getNextDeliveryTime()}</p>
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
                <option value={10}>Qty: 10</option>     
            </select>

            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
            <button onClick={handleBuyNow} className="buy-now-button">Buy Now</button>
        </div>
    )
}

export default ProductPurchaseWindow