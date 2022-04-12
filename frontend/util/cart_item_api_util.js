

export const fetchCartItems = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `api/users/${userId}/cart_items`
    })
}


export const createCartItem = (userId, cart_item) => {
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

export const updateCartItem = (cartItem) => {
    return $.ajax({
        method: 'PATCH',
        url: `api/users/${cartItem.userId}/cart_items/${cartItem.id}`,
        data: {cart_item: cartItem}
    })
}