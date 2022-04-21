import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchCartItems, updateCartItem } from "../../actions/cart_item_actions"
import { Link } from 'react-router-dom';

const CartCheckout = ({userId, cartItems, fetchCartItems, updateCartItem}) => {

    useEffect = ( () => {
        if(!cartItems.length) {
            fetchCartItems(userId)
        }
    })

    const updateQuantity = (e) => {
        cartItem.quantity = e.target.value;
        let updatedCartItem = Object.assign({}, cartItem)
        updatedCartItem.quantity = parseInt(e.target.value)
        updateCartItem(updatedCartItem);
    }

    // if(!cartItems) return <></>
    // debugger
    return (
        <div>
            <div>
                <h1>Shipping Address</h1>
            </div>
            <div>
                <h1>Payment Method</h1>
            </div>
            <div>
                <h1>Review items and shipping</h1>
                <div>
                    <ul>
                        {cartItems.map( cartItem => {
                            <li>
                                 <Link to={`/products/${cartItem.productId}`} >
                                    <img src={cartItem.image_url} className="product-index-image"/>
                                </Link> 
                                <div className="cart-item-main">
                                    <Link to={`/products/${cartItem.productId}`} className='product-index-name' >{cartItem.name}</Link> 
                                    <div className='cart-item-options'></div>
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
                                </div>
                            </li>
                        })}

                    </ul>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state => {

    return {
        cartItems: state.entities.cartItems ? Object.values(state.entities.cartItems) : [],
        userId: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCheckout)