import React, { useEffect, useState } from "react"
import CartIndexItem from "./cart_index_item"

import { connect} from "react-redux"
import { fetchCartItems, removeCartItem, updateCartItem } from "../../actions/cart_item_actions"
import {withRouter} from "react-router"
// import CartItemIndex from "./cart_item_index"


const CartIndex = ({cartItems, fetchCartItems, removeCartItem, updateCartItem, userId, sessionStorageUpdate, setSessionStorageUpdate, cartItemsSelected, setCartItemsSelected, history}) => {
    // const [cartItemsSelected, setCartItemsSelected] =  useState({})
    const [checkedOut, setCheckout] = useState(false);

    useEffect( () => {
        if(userId) fetchCartItems(userId)
        // cartItems.forEach( cartItem => newSelected[cartItem.id] = true )
    },[])
    
    useEffect( () => {
        // debugger
        let newSelected = {}
        if(userId){
            cartItems.forEach( cartItem => newSelected[cartItem.id] = true) 
        }
        else {
            
            if(sessionStorage.getItem('cart')) JSON.parse(sessionStorage.getItem('cart')).forEach( cartItem => newSelected[cartItem.productId] = true)
        }
        setCartItemsSelected(newSelected)

    },[cartItems])


    const cartItemList = () => {
        if(userId && cartItems.length) {
            return cartItems.map( (cartItem,index) => {
                return <CartIndexItem key={cartItem.id} index={index} cartItem={cartItem} removeCartItem={removeCartItem} cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} updateCartItem={updateCartItem}/>
            })
        } else if(sessionStorage.getItem('cart')) {
            return JSON.parse(sessionStorage.getItem('cart')).map( (cartItem, index) => {
                return <CartIndexItem key={index} index={index} cartItem={cartItem} removeCartItem={removeCartItem} cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} updateCartItem={updateCartItem} setSessionStorageUpdate={setSessionStorageUpdate}/>
            })
        } else {
            return (
                <div>
                    <h1>Your Cart is Empty</h1>
                </div>
            )
        }
    }



    const checkAllSelected = () => {
        if(userId) {
            debugger
            return Object.keys(cartItemsSelected).length === cartItems.length && Object.values(cartItemsSelected).every( value => value === true)
        } else {
            debugger
            return sessionStorage.getItem('cart') && Object.keys(cartItemsSelected).length === JSON.parse(sessionStorage.getItem('cart')).length && Object.values(cartItemsSelected).every( value => value === true)
        }
    }

    const toggleSelectAll = () => {
        let newSelected = {}
        if(!checkAllSelected()) {
            if(userId) {
                cartItems.forEach( cartItem => newSelected[cartItem.id] = true )
            } else {
                JSON.parse(sessionStorage.getItem('cart')).forEach( cartItem => newSelected[cartItem.productId] = true)
            }
        }
        setCartItemsSelected(newSelected)
    }


    const getCount = () => {
        let count = 0;
        if (userId) {
            cartItems.forEach( cartItem => count += cartItemsSelected[cartItem.id] ?  cartItem.quantity : 0)
        } else {
            
            if(sessionStorage.getItem('cart')) JSON.parse(sessionStorage.getItem('cart')).forEach( cartItem => count += cartItemsSelected[cartItem.productId] ?  cartItem.quantity : 0)
        }
        return `${count} item${count > 1 ? 's' : ''}`
    }

    const getSubtotal = () => {
        let subtotal = 0.00;
        if (userId) {
            cartItems.forEach( cartItem => subtotal += cartItemsSelected[cartItem.id] ? (cartItem.price * cartItem.quantity) : 0)
        } else {
            if(sessionStorage.getItem('cart')) {
                JSON.parse(sessionStorage.getItem('cart')).forEach( cartItem => {
                 subtotal += cartItemsSelected[cartItem.productId] ? (cartItem.price * cartItem.quantity) : 0
                })
            }
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
            // setCheckout(true)
            // cartItems.forEach( cartItem => cartItemsSelected[cartItem.id] ? removeCartItem(cartItem.userId, cartItem.id) : null)
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
                    { cartItems.length || (!!sessionStorage.getItem('cart') && JSON.parse(sessionStorage.getItem('cart'))).length ? 
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

// export default CartItemIndex


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