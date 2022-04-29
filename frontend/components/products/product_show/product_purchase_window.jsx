import React, { useState } from "react"
import {Link} from 'react-router-dom'
import { formatDeliveryDateShort, getNextDeliveryTime } from "../../../util/formatting_util"

const ProductPurchaseWindow = ({userId, product, createCartItem, updateCartItem, formatPrice, cartItems, tempCart, updateTempCart, history}) => {

    const [quantity, setQuantity] = useState('1')

    const update = (e) => {
        setQuantity(e.target.value)
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
            let updatedTempCart = tempCart.slice()
            let matchingCartItem = findMatchingCartItem(updatedTempCart)
            if(matchingCartItem) {
                matchingCartItem.quantity += parseInt(quantity)
            } else {
                cartItem.name = product.name
                cartItem.price = product.price
                cartItem.image_url = product.image_url
                updatedTempCart.push(cartItem)
                // createNoUserCartItem(cartItem)
            }
           updateTempCart(updatedTempCart)
        }
    }

    const handleBuyNow = () => {
    }

    return (
        <div className="product-purchase-window">
            <div className="product-purchase-window-price">
                {formatPrice(product.price)}
                <p className="product-purchase-window-returns">& <span className='fake-link'>Free Returns</span></p>
            </div>
            <div className="product-purchase-window-delivery-info">
                <p >FREE delivery <strong>{formatDeliveryDateShort(product)}</strong></p>
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

// import { connect } from "react-redux"
// import { withRouter } from "react-router-dom"
// import { createCartItem, updateCartItem } from "../../../../actions/cart_item_actions"
// import { openModal } from "../../../../actions/modal_actions"
// import ProductPurchaseWindow from "./product_purchase_window"

// const mapStateToProps = (state, ownProps) => {
//     return {
//         userId: state.session.id,
//         product: state.entities.product[ownProps.match.params.productId],
//         cartItems: state.entitites.cartItems
//     }
// }

// const mapDispatchToProps = dispatch => {
//     debugger
//     return {
//         createCartItem: (userId, cartItem) => dispatch(createCartItem(userId, cartItem)),
//         updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)), 
//         createNoUserCartItem: product => dispatch(createNoUserCartItem(product)),
//         openModal: (modal) => dispatch(openModal(modal))

//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPurchaseWindow))