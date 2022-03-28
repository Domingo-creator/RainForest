
export const fetchReviews = (productId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/products/${productId}/reviews`
    })
}

export const fetchReview = (productId, reviewId) => {
    return $.ajax({
        method: 'GET', 
        url: `/api/products/${productId}/reviews/${reviewId}`
    })
}

export const updateReview = (productId, review) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/products/${productId}/reviews/${review.id}`,
        data: {review}
    })
}

export const createReview = (productId, review) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `/api/products/${productId}/reviews`,
        data: {review}
    })
}

export const deleteReview = (productId, reviewId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/products/${productId}/reviews/${reviewId}`
    })
}