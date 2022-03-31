import React from 'react'
import { Link } from 'react-router-dom'

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
            <div className="image-placeholder"></div>
            <Link to={`/products/${product.id}`} className='link'>{product.name}</Link> 
            <Link to={`/products/${product.id}`} className='link'>{formatPrice()}</Link>
        </li>
    )

}

export default ProductIndexItem