import React, { useEffect } from 'react'
import ReviewIndexContainer from '../../reviews/review_index_container'
import ProductPurchaseWindow from './product_purchase_container/product_purchase_window'
import ProductPurchaseWindowContainer from './product_purchase_container/product_purcase_window_container'
import { Link } from 'react-router-dom'

const ProductShow = ({userId, match, product,fetchProduct, createCartItem}) => {
    useEffect( () => {
        fetchProduct(match.params.productId)
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

    if (!product) {
        return <></>
    }

    return (
        <div>
            <div className="category-bar">
                <p>{product.category}</p>
            </div>
            <section className="product-show-section-1">
                <img src={product.image_url} className="product-show-image"></img>
                <div className="main-product-section">
                    <div className="main-product-subsection">
                        <h1>{product.name}</h1>
                    </div>
                    <div className="main-product-subsection">
                        {formatPrice()}
                        <label> About this item:
                            <ul>
                                {parseString(product.body).map( (bodyElement, index) =>
                                    <li key={index}>{bodyElement}</li> 
                                )}      
                            </ul>
                        </label>
                    </div>
                </div>
                {/* <ProductPurchaseWindowContainer /> */}
                <ProductPurchaseWindow userId={userId} product={product} createCartItem={createCartItem} formatPrice={formatPrice}/>
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
                <ul>
                    {parseString(product.product_detail).map( (detail, index) => 
                    <li key={index}>{detail}</li>
                    )}
                </ul>
            </div>
            <Link to={`/products/${product.id}/reviews/new`}>Write a customer review</Link>
            <ReviewIndexContainer />
        </div>
    )
}

export default ProductShow;