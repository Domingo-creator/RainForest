export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
import * as ReviewApiUtil from '../util/review_api_util'

const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}

export const fetchReviews = (productId) => dispatch => {
    return ReviewApiUtil.fetchReviews(productId)
        .then(reviews => dispatch(receiveReviews(reviews)))
}

export const fetchReview = (productId, reviewId) => dispatch => {
    return ReviewApiUtil.fetchReview(productId, reviewId)
        .then( review => dispatch(receiveReview(review)))
}

export const updateReview = (productId, review) => dispatch => {
    return ReviewApiUtil.updateReview(productId, review)
        .then( updatedReview => dispatch(receiveReview(updatedReview)))
}

export const createReview = (productId, review) => dispatch => {
    return ReviewApiUtil.createReview(productId, review)
        .then( createdReview => dispatch(receiveReview(createdReview)))
}

export const deleteReview = (productId, reviewId) => dispatch => {
    return ReviewApiUtil.deleteReview(productId, reviewId)
        .then( () => dispatch(removeReview(productId, reviewId)))
}