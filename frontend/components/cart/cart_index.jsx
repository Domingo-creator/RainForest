import React, { useEffect, useState } from "react"
import CartIndexItem from "./cart_index_item"

import { connect} from "react-redux"
import { fetchCartItems, removeCartItem, updateCartItem } from "../../actions/cart_item_actions"
import {withRouter} from "react-router"
// import CartItemIndex from "./cart_item_index"


const CartIndex = ({cartItems, fetchCartItems, removeCartItem, updateCartItem, userId, tempCart, setTempCart, cartItemsSelected, setCartItemsSelected, history}) => {
    const [checkedOut, setCheckout] = useState(false);

    useEffect( () => {
        if(userId) fetchCartItems(userId)
        // cartItems.forEach( cartItem => newSelected[cartItem.id] = true )
    },[])
    
    useEffect( () => {
        let newSelected = {}
        if(userId){
            cartItems.forEach( cartItem => newSelected[cartItem.productId] = true) 
        }
        else {
            tempCart.forEach( cartItem => newSelected[cartItem.productId] = true)
        }
        setCartItemsSelected(newSelected)

    },[cartItems])


    const cartItemList = () => {
        if(userId && cartItems.length) {
            return cartItems.map( (cartItem,index) => 
                <CartIndexItem key={cartItem.id} index={index} cartItem={cartItem} removeCartItem={removeCartItem} cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} updateCartItem={updateCartItem}/>
            )
        } else if(tempCart) {
            return tempCart.map( (cartItem, index) => 
                <CartIndexItem key={index} index={index} cartItem={cartItem} removeCartItem={removeCartItem} cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} updateCartItem={updateCartItem}/>
            )

        } else {
            return (
                <div>
                    <h1>Your Cart is Empty</h1>
                </div>
            )
        }
    }



    const checkAllSelected = () => {
            return (Object.keys(cartItemsSelected).length === cartItems.length || (tempCart.length && Object.keys(cartItemsSelected).length === tempCart.length)) 
            && Object.values(cartItemsSelected).every( value => value === true)
    }
    

    const toggleSelectAll = () => {
        let newSelected = {}
        if(!checkAllSelected()) {
            if(userId) {
                cartItems.forEach( cartItem => newSelected[cartItem.productId] = true )
            } else {
                tempCart.forEach( cartItem => newSelected[cartItem.productId] = true)
            }
        }
        setCartItemsSelected(newSelected)
    }


    const getCount = () => {
        let count = 0;
        if (userId) {
            cartItems.forEach( cartItem => count += cartItemsSelected[cartItem.productId] ?  cartItem.quantity : 0)
        } else {
            tempCart.forEach( cartItem => count += cartItemsSelected[cartItem.productId] ?  cartItem.quantity : 0)
        }
        return `${count} item${count > 1 ? 's' : ''}`
    }


    const getSubtotal = () => {
        let subtotal = 0.00;
        if (userId) {
            cartItems.forEach( cartItem => subtotal += cartItemsSelected[cartItem.productId] ? (cartItem.price * cartItem.quantity) : 0)
        } else {
            tempCart.forEach( cartItem => subtotal += cartItemsSelected[cartItem.productId] ? (cartItem.price * cartItem.quantity) : 0)
        }
        let subtotalArray = subtotal.toString().split('.')
        if(subtotalArray.length === 1) subtotalArray.push('00');
        return (
            <div className="cart-price">
                <p className="cart-item-dollar-symbol">$</p>
                <p className="cart-item-dollars">{subtotalArray[0]}.</p>
                <p className="cart-item-cents">{subtotalArray[1].slice(0,2)}</p>
            </div>
        )
    }


    const handleCheckout = () => {
        if(userId) {
            sessionStorage.setItem('cartItemsSelected', JSON.stringify(cartItemsSelected))
            history.push('/cart/checkout')
        } else {
            history.push('/login')
        }
    }

    if (checkedOut) {
        return (
            <div>
                <p>Thank you for your purchase</p>
            </div>
        )
    } 

    return (
        <div className="cart-page">
            <ul className='cart-list'>
                <div>
                    <h1>Shopping Cart</h1>
                    { cartItems.length || tempCart.length ? 
                        <p onClick={toggleSelectAll} className="cart-select-all">
                            {checkAllSelected() ? 'Deselect all items' : 'Select All'}
                        </p>
                        :
                        <></>
                    }
                    <p>Price</p>
                </div>
                {cartItemList()}
                <div className="cart-subtotal">
                    <p className="cart-subtotal-count">Subtotal ({getCount()}):</p>
                    {getSubtotal()}
                </div>
            </ul>
            <div className="cart-checkout">
                <div>
                    <p className="cart-subtotal-count">Subtotal ({getCount()}):</p>
                    {getSubtotal()}
                </div>
                <button onClick={handleCheckout}>Proceed to checkout</button>
                {/* <Link to="/cart/checkout" className="link-button">Proceed to checkout</Link> */}
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        userId: state.session.id,
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        removeCartItem: (userId, cartItemId) => dispatch(removeCartItem(userId, cartItemId)), 
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
        // fetchProducts: (filter) => dispatch(fetchProducts(filter)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIndex))