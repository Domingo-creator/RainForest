import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../../reviews/star_rating'

const ProductIndexItem = ({product}) => {

    const formatPrice = () => {
        let priceArray = product.price.toString().split('.')
        if(priceArray.length === 1) priceArray.push('00');
        return (
            <div className="product-price">
                <p className="product-price-dollar-symbol">$</p>
                <p className="product-price-dollars">{priceArray[0]}</p>
                <p className="product-price-cents">{priceArray[1]}</p>
            </div>
        )
    }

    const formatDeliveryDate = (deliveryDelay = Math.floor(Math.random() * 6) + 2) => {
        let deliveryDate = new Date
        deliveryDate.setDate(deliveryDate.getDate() + deliveryDelay)
        deliveryDate = deliveryDate.toDateString().split(' ')
        deliveryDelay === 1 ? deliveryDate[0] = 'Tomorrow' : deliveryDelay === 0 ? deliveryDate[0] = 'Today' : null;
        deliveryDate[0] += ','
        return deliveryDate.slice(0, 3).join(' ') 
    }

    const trimmedName = () => product.name.length > 120 ? product.name.slice(0,120).concat('...') : product.name

    return(
        <li>
            <div className="product-index-image-container">
                <Link to={`/products/${product.id}`} className="product-index-image-link">
                    <img src={product.image_url} className="product-index-image"/>
                </Link> 
            </div>
            <div className="product-index-item-info">
                <Link to={`/products/${product.id}`} className='product-index-name' >{trimmedName()}</Link> 
                <div className="product-index-reviews">
                    <StarRating reviews={product.reviews}></StarRating>
                    <Link to={`/products/${product.id}`} className="product-index-reviews-count"><p>{product.reviews.length}</p></Link>
                </div>
                <Link to={`/products/${product.id}`} className='product-index-price'>{formatPrice()}</Link>
                <div className="product-index-delivery-date">Get it <span>{formatDeliveryDate()}</span></div>
            </div>
        </li>
    )

}

export default ProductIndexItem