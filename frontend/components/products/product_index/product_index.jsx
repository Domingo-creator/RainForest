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


    return(
        <ul className="product-list">
            {products.map( product => {
                return <ProductIndexItem key={product.id} product={product} createCartItem={createCartItem}/>
            })}
        </ul>
    )
}

export default ProductIndex