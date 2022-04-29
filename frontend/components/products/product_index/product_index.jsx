import React, { useEffect, useRef, useState } from "react"
import ProductIndexItem from "./product_index_item"
import { connect } from "react-redux"
import { fetchProducts } from "../../../actions/product_actions"


const ProductIndex = ({products, fetchProducts, createCartItem, userId, updateTempCart, filter}) => {

    const [loading,setLoading] = useState(true)


    useEffect( () => {
        fetchProducts(filter).then(() => setLoading(false))
        window.scrollTo(0, 0)
    },[filter])

   
    if(!products.length && !loading) return <h1>No products found matching your search...</h1>
    
    return loading ? 
        <></>
        :
        <ul className="product-list">
            {products.map( product => {
                return <ProductIndexItem key={product.id} product={product} createCartItem={createCartItem} />
            })}
        </ul>
    
}

////// Container ////////


const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products),
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex)