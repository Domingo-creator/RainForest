import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import CartCheckout from './cart_checkout'
import CartIndex from './cart_index'
import CartBuyNow from './cart_buy_now'
import { Redirect } from 'react-router-dom'

const Cart = ({tempCart, updateTempCart}) => {
    const [cartItemsSelected, setCartItemsSelected] =  useState({})

    return (
        <Switch>
            <Route path="/cart/checkout/:product_id" render={ () => <CartCheckout cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected}/> }/>
            <Route path="/cart/checkout"  render={ () => <CartCheckout cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected}/> } />
            <Route path="/" render={ () => <CartIndex cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} tempCart={tempCart} updateTempCart={updateTempCart} />} />
        </Switch>
    )
}

export default Cart;