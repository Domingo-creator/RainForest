import { connect } from "react-redux"
import React, { useEffect } from 'react'
import { fetchProduct } from "../../actions/product_actions"
import {Link} from 'react-router-dom'

const CartBuyNow = ({cartItem, fetchProduct, match}) => {

    useEffect( () => {
        fetchProduct(match.params.product_id)
        debugger
    },[])

    const formatPrice = () => {
        let priceArray = cartItem.price.toString().split('.')
        if(priceArray.length === 1) priceArray.push('00');
        return (
            <div className="product-price">
                <p className="product-price-dollar-symbol">$</p>
                <p className="product-price-dollars">{priceArray[0]}</p>
                <p className="product-price-cents">{priceArray[1]}</p>
            </div>
        )
    }

    const formatDeliveryDate = (deliveryDelay = cartItem.id * 5 % 3 + 1) => {
        let deliveryDate = new Date
        deliveryDate.setDate(deliveryDate.getDate() + deliveryDelay)
        deliveryDate = deliveryDate.toDateString().split(' ')
        deliveryDelay === 1 ? deliveryDate[0] = 'Tomorrow' : deliveryDelay === 0 ? deliveryDate[0] = 'Today' : null;
        deliveryDate[0] += ','
        return deliveryDate.slice(0, 3).join(' ') 
    }

    const trimmedName = () => cartItem.name.length > 120 ? cartItem.name.slice(0,120).concat('...') : cartItem.name


    if(!cartItem) return <></>
    return (
        <div>
            <div className="product-index-image-container">
                <Link to={`/products/${cartItem.id}`} className="product-index-image-link">
                    <img src={cartItem.image_url} className="product-index-image"/>
                </Link> 
            </div>
            <div className="product-index-item-info">
                <Link to={`/products/${cartItem.id}`} className='product-index-name' >{trimmedName()}</Link> 
           
                <Link to={`/products/${cartItem.id}`} className='product-index-price'>{formatPrice()}</Link>
                <div className="product-index-delivery-date">Get it <span>{formatDeliveryDate()}</span></div>
                <p className="product-index-delivery-date">FREE Shipping by RainForest</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        cartItem: state.entities.products[ownProps.match.params.product_id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: productId =>  dispatch(fetchProduct(productId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartBuyNow)