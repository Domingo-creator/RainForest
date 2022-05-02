import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { createCartItem, fetchCartItems, updateCartItem } from "../../../actions/cart_item_actions"
import { closeModal, openModal } from '../../../actions/modal_actions'
import AddToCartConfirm from './add_to_cart_confirm'
import CartMergedNotice from './cart_merged_notice'

 const CartIcon = ({userId, cartItems, createCartItem, updateCartItem, fetchCartItems, tempCart, updateTempCart, openModal, closeModal}) => {

   const totalMergedToCart = useRef(0)
   
    useEffect( () => {
        if(userId) {
            fetchCartItems(userId).then(() => mergeTempCart())
        } 
    },[])

    const mergeTempCart = () => {
        for(let i = 0; i < tempCart.length; i++ ) {
            let matchingCartItem = findMatchingCartItem(tempCart[i]);
            if(matchingCartItem) {
                matchingCartItem.quantity += tempCart[i].quantity
                totalMergedToCart.current += tempCart[i].quantity
                updateCartItem(matchingCartItem)
            } else {
                tempCart[i].userId = userId
                totalMergedToCart.current += tempCart[i].quantity
                createCartItem(userId, tempCart[i])
            }
        }
        if(tempCart.length) openModal('cartMergedNotice')
        updateTempCart([])
    }

    const findMatchingCartItem = (tempCartItem) => {
        for(let i = 0; i < cartItems.length; i++) {
            if(cartItems[i].productId === tempCartItem.productId) {
                return cartItems[i]
            }
        }
        return null
    }

    const cartItemCount = () => {
        let count = 0;
        if(userId) {
            cartItems.forEach( cartItem => count += cartItem.quantity)
        } else {
            tempCart.forEach( cartItem => count += cartItem.quantity )
        }
        return count;
    }

    return (
        <div onClick={closeModal}>
            <Link to='/cart' className="cart-count-container" >
                <div>
                    <p className="cart-count">{cartItemCount()}</p>
                    <img src="https://rainforest-dev.s3.us-west-1.amazonaws.com/cartIcon.png" className="carticon"/>
                </div>
                    <p className="cart-icon-words">cart</p>
            </Link>
            <AddToCartConfirm tempCart={tempCart} />
            <CartMergedNotice totalMergedToCart={totalMergedToCart}/>
        </div>
    )

 }

 /////// Container ////////


const mapStateToProps = state => {
    return {
        userId: state.session.id,
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [] 

    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCartItem: (userId, product) => dispatch(createCartItem(userId, product)),
        updateCartItem: (userId, cartItem) => dispatch(updateCartItem(userId, cartItem)),
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        closeModal: () => dispatch(closeModal()),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)