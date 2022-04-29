import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeCartItem, updateCartItem } from '../../actions/cart_item_actions';
import { formatCheckoutPrice, formatDeliveryDateWithYear, getNextDeliveryTime } from "../../util/formatting_util"


const CartCheckoutItem = ({checkoutItem, updateCartItem, removeCartItem}) => {

    const updateQuantity = (e) => {
        let updatedCartItem = Object.assign({}, checkoutItem)
        updatedCartItem.quantity = parseInt(e.target.value)
        updateCartItem(updatedCartItem)
    }

    const trimmedName = (fullName) => fullName.length > 120 ? fullName.slice(0,80).concat('...') : fullName


    return (
        <li>
            <div className='cart-item-header'>
                <p><span>Delivery date: {formatDeliveryDateWithYear(checkoutItem)}</span> If you order within the {getNextDeliveryTime()}</p>
                <p>Items shipped from RainForest</p>
            </div>
            <div className='cart-item-body'>
                <Link to={`/products/${checkoutItem.productId}`} >
                    <img src={checkoutItem.image_url} className="product-index-image"/>
                </Link> 
                <div className="cart-item-main">
                    <Link to={`/products/${checkoutItem.productId}`} className='product-index-name' >{trimmedName(checkoutItem.name)}</Link> 
                    <div className="cart-item-price">{formatCheckoutPrice(checkoutItem.price)}</div>
                    
                    <div className='cart-item-options'></div>
                    <select 
                        name="quantity" 
                        id="product-quantity"
                        value={checkoutItem.quantity}
                        onChange={updateQuantity}>
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
                </div>
            </div>
        </li>
    )
}

////// CONTAINER ///////

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)),
        removeCartItem: (userId, cartItemId) => dispatch(removeCartItem(userId, cartItemId))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCheckoutItem)