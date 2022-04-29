import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import CartCheckout from './cart_checkout'
import CartIndex from './cart_index'
import CartBuyNow from './car_buy_now'

const Cart = ({tempCart, updateTempCart}) => {
    const [cartItemsSelected, setCartItemsSelected] =  useState({})

    return (
        <Switch>
            <Route path="/cart/checkout/:product_id" component={CartBuyNow} />
            <Route path="/cart/checkout"  render={ () => <CartCheckout cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected}/> } />
            <Route path="/" render={ () => <CartIndex cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} tempCart={tempCart} updateTempCart={updateTempCart} />} />
        </Switch>
    )
}

export default Cart;