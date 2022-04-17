import * as ProductApiUtil from '../util/product_api_util'
export const RECEIVE_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_SINGLE_PRODUCT = 'RECEIVE_SINGLE_PRODUCT';
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products
    }
}


const receiveProduct = product => {
    // console.log(product.product.image_url)
    return {
        type: RECEIVE_SINGLE_PRODUCT,
        product
    }
}

const receiveSearchResults = results => {
    return {
         type: RECEIVE_SEARCH_RESULTS,
         results
    }
}

export const fetchProducts = filter => dispatch => {
    return ProductApiUtil.fetchProducts(filter)
        .then( products => dispatch(receiveProducts(products)))
}

export const fetchSearchResults = filter => dispatch => {
    return ProductApiUtil.fetchProducts(filter)
        .then( results => dispatch(receiveSearchResults(results)))
}

export const fetchProduct = productId => dispatch => {
    return ProductApiUtil.fetchProduct(productId)
        .then( product => dispatch(receiveProduct(product)))
}

