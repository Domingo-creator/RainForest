import React, { useState } from 'react'
import {Switch, Route} from 'react-router-dom'
import CartCheckout from './cart_checkout'
import CartIndex from './cart_index'
import CartBuyNow from './car_buy_now'

const Cart = ({sessionStorageUpdate, setSessionStorageUpdate}) => {
    const [cartItemsSelected, setCartItemsSelected] =  useState({})

    return (
        <Switch>
            <Route path="/checkout/:product_id" component={CartBuyNow} />
            <Route path="/checkout"  render={ () => <CartCheckout cartItemsSelected={cartItemsSelected} /> } />
            <Route path="/" render={ () => <CartIndex cartItemsSelected={cartItemsSelected} setCartItemsSelected={setCartItemsSelected} sessionStorageUpdate={sessionStorageUpdate} setSessionStorageUpdate={setSessionStorageUpdate} />} />
        </Switch>
    )
}

export default Cart;