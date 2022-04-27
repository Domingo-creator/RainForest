import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


import { connect, } from "react-redux"
import { fetchProduct } from "../../actions/product_actions"
// import CartItemIndexItem from "./cart_item_index_item"
import { removeCartItem, updateCartItem } from "../../actions/cart_item_actions"

const CartIndexItem = ({cartItem, removeCartItem, updateCartItem, cartItemsSelected, setCartItemsSelected, setSessionStorageUpdate}) => {
    const handleDelete = () => {
        if(cartItem.userId) {
            removeCartItem(cartItem.userId, cartItem.id)
        } else {
            let cart = JSON.parse(sessionStorage.getItem('cart'))
            for(let i = 0; i < cart.length; i++) {
                if (cart[i].productId === cartItem.productId) {
                    sessionStorage.setItem('cart', JSON.stringify(cart.slice(0, i).concat(cart.slice(i + 1))))
                    setSessionStorageUpdate(Math.random() * 1000)
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
        if(cartItem.id) {
            let updatedCartItem = Object.assign({}, cartItem)
            updatedCartItem.quantity = parseInt(e.target.value)
            updateCartItem(updatedCartItem);
        } else {
            let cart = JSON.parse(sessionStorage.getItem('cart'))
            for(let i = 0; i < cart.length; i++) {
                if (cart[i].productId === cartItem.productId) {
                    cart[i].quantity = parseInt(e.target.value)
                    sessionStorage.setItem('cart', JSON.stringify(cart))
                    setSessionStorageUpdate(Math.random() * 1000)
                    break;
                }
            }
        }
    }

    const updateSelected = () => {
        let newSelected = Object.assign({}, cartItemsSelected)
        if(cartItem.id) {
            if(cartItemsSelected[cartItem.id]) {
                newSelected[cartItem.id] = false
            }  else {
                newSelected[cartItem.id] = true
            } 
        } else {
            if(cartItemsSelected[cartItem.productId]) {
                newSelected[cartItem.productId] = false
            }  else {
                newSelected[cartItem.productId] = true
            } 
        }
        setCartItemsSelected(newSelected)
    }

    return (
        <li>
            <input 
                type='checkbox' 
                checked={cartItem.id ? cartItemsSelected[cartItem.id] ? true : false : cartItemsSelected[cartItem.productId] ? true : false}
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

// export default CartItemIndexItem


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