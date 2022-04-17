import React, { useEffect, useState } from "react"
import ProductIndexItem from "./product_index_item"
const ProductIndex = ({products, fetchProducts, createCartItem, userId}) => {

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        if(sessionStorage.getItem('prevFilter')) {
            fetchProducts(sessionStorage.getItem('prevFilter'))
        } else{
            fetchProducts()
        }
        
    },[])

    useEffect( () => {
        if(products) setLoading(false)
    }, [products])

    if(!products.length && !loading) {
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