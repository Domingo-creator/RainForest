import React, { useEffect, useState } from "react"
import ProductIndexItem from "./product_index_item"
const ProductIndex = ({products, fetchProducts, createCartItem, userId}) => {

    const [loading, setLoading] = useState(true)

    useEffect( () => {
        if(sessionStorage.getItem('prevFilter')) {
            fetchProducts(sessionStorage.getItem('prevFilter')).then(() => setLoading(false))
        } else{
            fetchProducts().then( () => setLoading(false))
        }
        window.scrollTo(0, 0)
    },[])


    if(!products.length && !loading) {
        // debugger
        return <h1>No products found matching your search...</h1>
    }

    return(
        <ul className="product-list">
            {products.map( product => {
                return <ProductIndexItem key={product.id} product={product} createCartItem={createCartItem} />
            })}
        </ul>
    )
}

export default ProductIndex