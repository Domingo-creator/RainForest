
export const fetchProducts = (filter) => {
    return $.ajax({
        method: 'GET',
        url: '/api/products',
        data: {filter: filter}
    })
}

export const fetchProduct = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}`
    })
}
