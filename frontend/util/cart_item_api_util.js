

export const fetchCartItems = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/cart_items`
    })
}

export const createCartItem = (userId, cart_item) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `api/users/${userId}/cart_items`,
        data: {cart_item}
    })
}

export const removeCartItem = (userId, cartItemId) => {
    return $.ajax({
        method: 'DELETE',
        url: `api/users/${userId}/cart_items/${cartItemId}`
    })
}