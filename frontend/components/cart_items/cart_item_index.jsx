import React, { useEffect, useState } from "react"
import CartItemIndexItem from "./cart_item_index_item"

const CartItemIndex = ({cartItems, fetchCartItems, removeCartItem, updateCartItem, userId}) => {
    const [cartItemsSelected, setCartItemsSelected] =  useState({})

    useEffect( () => {
        if(userId) fetchCartItems(userId)
    },[])

    const cartItemList = () => {
        if(userId && cartItems.length) {
            return cartItems.map( (cartItem,index) => {
                return <CartItemIndexItem key={cartItem.id} index={index} cartItem={cartItem} removeCartItem={removeCartItem} cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} updateCartItem={updateCartItem}/>
            })
        } else if(localStorage.getItem('cart')) {
            return JSON.parse(localStorage.getItem('cart')).map( (cartItem, index) => {
                return <CartItemIndexItem key={index} index={index} cartItem={cartItem} removeCartItem={removeCartItem} cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} updateCartItem={updateCartItem}/>
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
        return Object.keys(cartItemsSelected).length === cartItems.length && Object.values(cartItemsSelected).every( value => value === true)
    }

    const toggleSelectAll = () => {
        let newSelected = {}
        if(!checkAllSelected()) {
            cartItems.forEach( cartItem => newSelected[cartItem.id] = true )
        }
        setCartItemsSelected(newSelected)
    }


    const getCount = () => {
        let count = 0;
        cartItems.forEach( cartItem => count += cartItem.quantity)
        return `${count} item${count > 1 ? 's' : ''}`
    }

    const getSubtotal = () => {
        let subtotal = 0.00;
        cartItems.forEach( cartItem => subtotal += (cartItem.price * cartItem.quantity))
        let subtotalArray = subtotal.toString().split('.')
        if(subtotalArray.length === 1) subtotalArray.push('00');
        return (
            <div className="product-price">
                <p className="cart-item-price">$</p>
                <p className="cart-item-price">{subtotalArray[0]}.</p>
                <p className="cart-item-price">{subtotalArray[1]}</p>
            </div>
        )
    }

    return (
        <ul className='cart-list'>
            <div>
                <h1>Shopping Cart</h1>
                { cartItems.length ? 
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
    )
}

export default CartItemIndex