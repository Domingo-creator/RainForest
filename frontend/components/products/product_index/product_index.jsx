import React, { useEffect } from "react"
import ProductIndexItem from "./product_index_item"
const ProductIndex = ({products, fetchProducts, createCartItem, userId}) => {

    useEffect( () => {
        if(localStorage.getItem('prevFilter')) {
            fetchProducts(localStorage.getItem('prevFilter'))
        } else{
            fetchProducts()
        }
    },[])

    if(!products.length) {
        return <h1>No products found matching your search...</h1>
    }

    return(
        <ul className="product-list">
            {products.map( product => {
                return <ProductIndexItem key={product.id} product={product} createCartItem={createCartItem}/>
            })}
        </ul>
    )
}

export default ProductIndex