import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { createCartItem, createNoUserCartItem, fetchCartItems } from "../../../actions/cart_item_actions"
import { closeModal } from '../../../actions/modal_actions'

 const CartIcon = ({userId, cartItems, createCartItem, fetchCartItems, tempCart, updateTempCart, sessionStorageUpdate, closeModal}) => {
    const [storageUpdate, setStoragetUpdate] = useState(sessionStorageUpdate)

   
    useEffect( () => {
        if(userId) fetchCartItems(userId) 
    },[])

    //Merge Temp Cart on Log In
    if(tempCart.length && userId) {
        debugger
        tempCart.forEach( cartItem => {
            cartItem.userId = userId
            createCartItem(userId, cartItem)
        })
        updateTempCart([])
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
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)