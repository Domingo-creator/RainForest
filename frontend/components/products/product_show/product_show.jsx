import React, { useEffect, useState } from 'react'
import ReviewIndexContainer from '../../reviews/review_index_container'
import ProductPurchaseWindow from './product_purchase_container/product_purchase_window'
import ProductPurchaseWindowContainer from './product_purchase_container/product_purcase_window_container'
import { Link } from 'react-router-dom'
import StarRating from '../../reviews/star_rating'

const ProductShow = ({userId, match, product, cartItems, fetchProduct, createCartItem, updateCartItem, setSessionStorageUpdate, sessionStorageUpdate, openModal, history}) => {
    
  

    useEffect( () => {
        fetchProduct(match.params.productId)
        window.scrollTo(0, 0)
    },[])

    useEffect( () => {
        if(!product ){
            fetchProduct(match.params.productId)
        } 
    },[product])


    const parseString = (fieldString = "") => {
        return fieldString.split('\n')
    }

    const formatPrice = () => {
        let priceArray = product.price.toString().split('.')
        if(priceArray.length === 1) priceArray.push('00');
        return (
            <div className="product-price">
                <p className="product-price-money-symbol">$</p>
                <p className="product-price-dollars">{priceArray[0]}</p>
                <p className="product-price-cents">{priceArray[1]}</p>
            </div>
        )
    }

    
    const formatProductDetails = () => {
        let detailsObj = {}
        parseString(product.product_detail).forEach( product_detail => {
            let detailParts = product_detail.split(':')
            if (detailParts.length > 1) detailsObj[detailParts[0].trim()] = detailParts[1].trim()
        })
        return detailsObj
    }

    const formattedProductDetails = product ? formatProductDetails() : null

    const getReviewScore = () => {
        let reviewScore = 0.0;
        product.reviews.forEach( review => reviewScore += review.rating )
        return reviewScore > 0 ? reviewScore/product.reviews.length : 0
    } 

    const getRatingPercent = (rating) => {
        let ratingCount = product.reviews.filter( review => review.rating === rating);
        return (ratingCount.length / product.reviews.length) * 100   
    }



    if (!product) {
        return <></>
    }
   
    // debugger
    return (
        <div>
            <div className="category-bar">
                <p>{product.category}</p>
            </div>
            <section className="product-show-section-1">
                <div className='product-show-image-container'>
                    <img src={product.image_url} className="product-show-image"></img>
                </div>
                <div className="main-product-section">
                    <div className="main-product-subsection">
                        <h1>{product.name}</h1>
                        <StarRating reviews={product.reviews} />
                    </div>
                    <div className="main-product-subsection">
                        {formatPrice()}
                        <p className='bold'> About this item:</p>
                        <ul>
                            {parseString(product.body).map( (bodyElement, index) =>
                                <li key={index}>{bodyElement}</li> 
                            )}      
                        </ul>
                        
                    </div>
                </div>
                <ProductPurchaseWindow userId={userId} product={product} createCartItem={createCartItem} formatPrice={formatPrice} cartItems={cartItems} updateCartItem={updateCartItem} history={history} setSessionStorageUpdate={setSessionStorageUpdate} openModal={openModal}/>
            </section>
            <div className="product-description main-product-subsection">
                <h1>Description</h1>
                <ul>
                    {parseString(product.description).map( (descriptionElement, index) => 
                        <li key={index}>{descriptionElement}</li>
                    )}
                </ul>
            </div>
            <div className="product-detail main-product-subsection">
                <h1>Product Details</h1>
                <div>
                    <ul>
                        {Object.keys(formattedProductDetails).map( (detailKey, index ) => 
                            <li key="index">{detailKey}</li>
                        )}
                    </ul>
                    <ul>
                        {Object.values(formattedProductDetails).map( (detailValue, index) => 
                            <li key="index">{detailValue}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="product-reviews main-product-subsection">
                <div className="product-reviews-left" >
                    <div className="product-reviews-breakdown">
                        <h1>Customer reviews</h1>
                        <div className="product-reviews-score">
                            <StarRating reviews={product.reviews} />
                            <p>{Math.round(getReviewScore() * 10) / 10} Out of 5</p>
                        </div>
                        <p className="ratings-count">{product.reviews.length} global ratings</p>
                        <div className="ratings-chart">
                            <div className="ratings-chart-column">
                                <p>5 star</p>
                                <div className="ratings-chart-column-graph"></div>
                                <p className="ratings-chart-column-percent">{Math.round(getRatingPercent(5) * 10) / 10 || 0}%</p>
                                <div className="ratings-chart-column-graph ratings-chart-column-graph-results" style={{width: (getRatingPercent(5) * 2) + 'px'}}></div>
                           </div>
                            <div className="ratings-chart-column">
                                <p>4 star</p>   
                                <div className="ratings-chart-column-graph"></div>
                                <p className="ratings-chart-column-percent">{Math.round(getRatingPercent(4) * 10) / 10 || 0}%</p>
                                <div className="ratings-chart-column-graph ratings-chart-column-graph-results" style={{width: (getRatingPercent(4) * 2) + 'px'}}></div>
                            </div>
                            <div className="ratings-chart-column">
                                <p>3 star</p>
                                <div className="ratings-chart-column-graph"></div>
                                <p className="ratings-chart-column-percent">{Math.round(getRatingPercent(3) * 10) / 10 || 0}%</p>
                                <div className="ratings-chart-column-graph ratings-chart-column-graph-results" style={{width: (getRatingPercent(3) * 2) + 'px'}}></div>
                            </div>
                            <div className="ratings-chart-column">
                                <p>2 star</p>
                                <div className="ratings-chart-column-graph"></div>
                                <p className="ratings-chart-column-percent">{Math.round(getRatingPercent(2) * 10) / 10 || 0}%</p>
                                <div className="ratings-chart-column-graph ratings-chart-column-graph-results" style={{width: (getRatingPercent(2) * 2) + 'px'}}></div>
                            </div>
                            <div className="ratings-chart-column">
                                <p>1 star</p>
                                <div className="ratings-chart-column-graph"></div>
                                <p className="ratings-chart-column-percent">{Math.round(getRatingPercent(1) * 10) / 10 || 0}%</p>
                                <div className="ratings-chart-column-graph ratings-chart-column-graph-results" style={{width: (getRatingPercent(1) * 2) + 'px'}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="review-product-section">
                        <h2>Review this product</h2>
                        <p>Share your thoughts with other customers</p>
                        <Link to={userId ? `/products/${product.id}/reviews/new` : '/login'} className="grey-button">Write a customer review</Link>
                    </div>
                </div>
                <div className="product-reviews-right">
                    <ReviewIndexContainer />
                </div>
            </div>
        </div>
    )
}

export default ProductShow;