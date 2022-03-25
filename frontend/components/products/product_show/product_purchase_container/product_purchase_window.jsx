import React, { useState } from "react"

const ProductPurchaseWindow = ({userId, product, createCartItem}) => {

    const [quantity, setQuantity] = useState('1')

    const update = (e) => {
        setQuantity(e.target.value)
    }

    const handleAddToCart = () => {
        let cartItem = Object.assign( {}, {userId: userId, productId: product.id, quantity: parseInt(quantity)})
        createCartItem(userId, cartItem);
    }

    const handleBuyNow = () => {

    }

    return (
        <div>
            <p className="product-price">{product.price}</p>
            <div className="product-purchase-window-delivery-info">
            </div>
            <h2 className="product-purchase-window-stock-status">In Stock</h2>
            
            <select 
              name="quantity" 
              id="product-quantity"
              value={quantity}
              onChange={update}>
                <option value={1}>1</option>     
                <option value={2}>2</option>     
                <option value={3}>3</option>     
                <option value={4}>4</option>     
                <option value={5}>5</option>     
                <option value={6}>6</option>     
                <option value={7}>7</option>     
                <option value={8}>8</option>     
                <option value={9}>9</option>     
                <option value={10}>10</option>     
            </select>

            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    )
}

export default ProductPurchaseWindow