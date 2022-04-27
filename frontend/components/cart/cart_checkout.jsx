import React, { useEffect } from "react"
import { connect } from "react-redux"
import { fetchCartItems, updateCartItem } from "../../actions/cart_item_actions"
import { Link } from 'react-router-dom';

const CartCheckout = ({userId, setSelectedCartItems,selectedCartItems, fetchCartItems, updateCartItem}) => {

    // useEffect = ( () => {
    //     if(!selectedItems.length) {
    //         fetchCartItems(userId)
    //     }
    // })

    const updateQuantity = (selectedCartItemId, e) => {
        // selectedCartItem.quantity = e.target.value;
        let updatedSelectedCart = Object.assign({}, selectedCartItems)
        // let updatedCartItem = Object.assign({}, selectedCartItem)
        // updatedCartItem.quantity = parseInt(e.target.value)
        updatedSelectedCart[selectedCartItemId].quantity = parseInt(e.target.value)
        updateCartItem(updatedSelectedCart[selectedCartItemId]);
        setSelectedCartItems(updatedSelectedCart);
    }

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
                        {selectedCartItems.map( selectedCartItem => {
                            <li>
                                 <Link to={`/products/${cartItem.productId}`} >
                                    <img src={selectedCartItem.image_url} className="product-index-image"/>
                                </Link> 
                                <div className="cart-item-main">
                                    <Link to={`/products/${selectedCartItem.productId}`} className='product-index-name' >{selectedCartItem.name}</Link> 
                                    <div className='cart-item-options'></div>
                                    <select 
                                        name="quantity" 
                                        id="product-quantity"
                                        value={selectedCartItem.quantity}
                                        onChange={(e) => updateQuantity(selectedCartItem.id, e)}>
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
        // fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCheckout)