import React from 'react'
import { Link } from 'react-router-dom'
import { formatDeliveryDateShort, formatPrice } from '../../../util/formatting_util'
import StarRating from '../../reviews/star_rating'

const ProductIndexItem = ({product}) => {

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
                <Link to={`/products/${product.id}`} className='product-index-price'>{formatPrice(product.price)}</Link>
                <div className="product-index-delivery-date">Get it <span>{formatDeliveryDateShort(product)}</span></div>
                <p className="product-index-delivery-date">FREE Shipping by RainForest</p>
            </div>
        </li>
    )

}

export default ProductIndexItem