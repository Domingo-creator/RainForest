export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS'
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
// export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'
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

const deleteCartItem = (cartItemId) => {
    return {
        type: REMOVE_CART_ITEM,
        cartItemId        
    }
}

// const deleteCartItems = (cartItemIds) => {
//     return {
//         type: REMOVE_CART_ITEMS,
//         cartItemIds
//     }
// }

export const fetchCartItems = (userId) => dispatch => {
    return CartItemApitUtil.fetchCartItems(userId)
        .then(cartItems => dispatch(receiveCartItems(cartItems)))
}

export const createCartItem = (userId, product) => dispatch => {
    return CartItemApitUtil.createCartItem(userId, product)
        .then(cartItem => dispatch(receiveCartItem(cartItem)))
}

export const createNoUserCartItem = (cartItem) => dispatch => {
    sessionStorage.setItem('cart', Object.assign({cartItem}, sessionStorage.getItem('cart')) )
        .then( () => dispatch(receiveCartItem(cartItem)))
}

export const removeCartItem = (userId, cartItemId) => dispatch => {
    return CartItemApitUtil.removeCartItem(userId, cartItemId)
        .then( () => dispatch(deleteCartItem(cartItemId)))  // this may be wrong
}

export const removeCartItems = (cartItems) => {
    return CartItemApitUtil.removeCartItems(cartItems)
        .then( () => dispatch(deleteCartItems(cartItems)))
}

export const updateCartItem = (cartItem) => dispatch => {
    return CartItemApitUtil.updateCartItem(cartItem)
        .then( (updatedCartItem) => dispatch(receiveCartItem(updatedCartItem)))
}