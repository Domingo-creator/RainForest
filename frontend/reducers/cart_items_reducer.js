import { RECEIVE_CART_ITEM, RECEIVE_CART_ITEMS, REMOVE_CART_ITEM } from "../actions/cart_item_actions"

const cartItemsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    let newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CART_ITEMS:
            return action.cartItems
        case RECEIVE_CART_ITEM:
            newState[action.cartItems.id] = action.cartItem
            return newState
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId] 
            return newState
        default:
            return oldState
    }
}

export default cartItemsReducer;