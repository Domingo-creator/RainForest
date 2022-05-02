import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect, } from "react-redux"
import { fetchProduct } from "../../actions/product_actions"
import { removeCartItem, updateCartItem } from "../../actions/cart_item_actions"
import { formatCartPrice } from '../../util/formatting_util'

const CartIndexItem = ({cartItem, removeCartItem, updateCartItem, cartItemsSelected, setCartItemsSelected, tempCart, updateTempCart}) => {
    
    const handleDelete = () => {
        // debugger
        if(cartItem.userId) {
            removeCartItem(cartItem.userId, cartItem.id)
        } else {
            let updatedTempCart = Object.values(Object.assign({}, tempCart))
            for(let i = 0; i < updatedTempCart.length; i++) {
                if (updatedTempCart[i].productId === cartItem.productId) {
                    updateTempCart(updatedTempCart.slice(0, i).concat(updatedTempCart.slice(i + 1)))
                    break;
                }
            }
        }
    }

    const saveForLater = () => {
        let savedCartItem = Object.assign({}, cartItem)
        savedCartItem.saveForLater = true
        updateCartItem(savedCartItem)
    }

 

    const updateQuantity = (e) => {
        if(cartItem.id) {
            let updatedCartItem = Object.assign({}, cartItem)
            updatedCartItem.quantity = parseInt(e.target.value)
            updateCartItem(updatedCartItem);
        } else {
            let updatedTempCart = Object.values(Object.assign({}, tempCart))

            for(let i = 0; i < updatedTempCart.length; i++) {
                if (updatedTempCart[i].productId === cartItem.productId) {
                    updatedTempCart[i].quantity = parseInt(e.target.value)
                    updateTempCart(updatedTempCart)
                    break;
                }
            }
        }
    }

    const updateSelected = () => {
        let newSelected = Object.assign({}, cartItemsSelected)
        if(cartItemsSelected[cartItem.productId]) {
            newSelected[cartItem.productId] = false
        }  else {
            newSelected[cartItem.productId] = true
        } 
        setCartItemsSelected(newSelected)
    }
    

    return (
        <li>
            <input 
                type='checkbox' 
                checked={cartItemsSelected[cartItem.productId] ? true : false}
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
                <Link to={`/products/${cartItem.productId}`} className='product-index-price'>{formatCartPrice(cartItem.price)}</Link>
          
        </li>
    )
}

/////////// CONTAINER ///////////

const mapStateToProps = (state, ownProps) => {
    return {
        // cartItem: state.entities.cartItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        // removeProduct: (productId) => dispatch(removeCartItem(productId)),
        // updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndexItem)