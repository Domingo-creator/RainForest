import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from '../../reviews/star_rating'

const ProductIndexItem = ({product}) => {

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

    return(
        <li>
            <Link to={`/products/${product.id}`} >
                <img src={product.image_url} className="product-index-image"/>
            </Link> 
            <Link to={`/products/${product.id}`} className='product-index-name' >{product.name}</Link> 
            <Link to={`/products/${product.id}`} className='product-index-price'>{formatPrice()}</Link>
            <StarRating reviews={product.reviews}/>
        </li>
    )

}

export default ProductIndexItem