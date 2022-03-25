import React from 'react'
import { Link } from 'react-router-dom'

const ProductIndexItem = ({product}) => {

    return(
        <li>
            <Link to={`/products/${product.id}`} className='link'>{product.name}</Link> 
            <Link to={`/products/${product.id}`} className='link'>{product.price}</Link>
        </li>
    )

}

export default ProductIndexItem