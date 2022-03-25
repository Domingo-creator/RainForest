export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
import * as CartItemApitUtil from '../util/cart_item_api_util'

const receiveCartItems = (cartItems) => {
    return {
        type: RECEIVE_CART_ITEMS,
        cartItems
    }
}

const receiveCartItem = (cartItem) => {
    return {
        type: RECEIVE_CART_ITEM,
        cartItem
    }
}

const deleteCartItem = () => {
    return {
        type: REMOVE_CART_ITEM        
    }
}


export const fetchCartItems = (userId) => dispatch => {
    return CartItemApitUtil.fetchCartItems(userId)
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
}

export const createCartItem = (userId, product) => dispatch => {
    debugger
    return CartItemApitUtil.createCartItem(userId, product)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const removeCartItem = (userId, cartItemId) => dispatch => {
    return CartItemApitUtil.removeCartItem(userId, cartItemId)
        .then( () => dispatch(deleteCartItem(cartItemId)))  // this may be wrong
}