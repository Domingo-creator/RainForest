import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';
import {AiFillCheckCircle, AiOutlineClose} from 'react-icons/ai'
import { formatCheckoutPrice } from '../../../util/formatting_util';

const AddToCartConfirm = ({cartItems, slideOutModal, tempCart, loggedIn} ) => {
  
    // const newCartItem = cartItems[cartItems.length - 1]
    const newCartItem = JSON.parse(sessionStorage.getItem('newCartItem'))

    useEffect( () => {
        return () => sessionStorage.removeItem('newCartItem')
    },[])

    const getCount = () => {
        let count = 0;
        loggedIn ? 
           cartItems.forEach( cartItem => count += cartItem.quantity) : 
           tempCart.forEach( cartItem => count += cartItem.quantity)
        return `${count} item${count > 1 ? 's' : ''}`
    }

    const getSubtotal = () => {
        let subtotal = 0.00;
        if (loggedIn) {
            cartItems.forEach( cartItem => subtotal += cartItem.price * cartItem.quantity)
        } else {
            tempCart.forEach( cartItem => subtotal += cartItem.price * cartItem.quantity)
        }
        return formatCheckoutPrice(subtotal.toFixed(2))
    }

    const goToCheckout = (e) => {
        let selectedCart = {}
        if(loggedIn) {
            cartItems.forEach( cartItem => selectedCart[cartItem.productId] = true)
        } else {
            tempCart.forEach( cartItem => selectedCart[cartItem.productId] = true)
        }
        sessionStorage.setItem('cartItemsSelected', JSON.stringify(selectedCart))
        slideOutModal(e)
    }

    return (
        <div className="add-to-cart-confirm-container">
            <AiOutlineClose onClick={slideOutModal} className="close-x-button"/>
            <div>
                <div className="add-to-cart-confirm-main-container">
                    <div className="add-to-cart-confirm-message">
                        <AiFillCheckCircle className="green-checkmark" />
                        <h3>Added to cart</h3>
                    </div>
                    <div className="add-to-cart-confirm-image-container">
                        <img src={newCartItem?.image_url} className="add-to-cart-confirm-image"/>
                    </div>
                </div>
                <h3 className='add-to-cart-confirm-subtotal'>Cart subtotal ({getCount()}): {getSubtotal()}</h3>
                <div className='add-to-cart-confirm-buttons'>
                    <Link to="/cart" onClick={slideOutModal} className="add-to-cart-confirm-button grey">Cart</Link>
                    <Link to={loggedIn ? `/cart/checkout` : '/login'} onClick={goToCheckout} className="add-to-cart-confirm-button yellow">Proceed to checkout ({getCount()})</Link>
                </div>
            </div>
        </div>
    )
}


const AddToCartConfirmModal = ({modal, closeModal, cartItems, tempCart, loggedIn}) => {

    let [modalClosing, setModalClosing] = useState(false);
  
    

    const slideOutModal = (e) => {
        e.stopPropagation()
        if(!modalClosing){
            setModalClosing(true)
                setTimeout( () => {
                    setModalClosing(false);
                    closeModal()
                }, 800)
        };
    }
    
    if(modal !== 'addToCartConfirm') return null
    return (
        <div className="add-to-cart-modal-background" onClick={(e) => slideOutModal(e)}>
            <div className={(modalClosing ? "add-to-cart-modal-closed" : "add-to-cart-modal-open") + " add-to-cart-modal-child" } onClick={e => e.stopPropagation()} >
                <AddToCartConfirm slideOutModal={slideOutModal} tempCart={tempCart} cartItems={cartItems} loggedIn={loggedIn}/>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [],
        modal: state.modal,
        loggedIn: state.session.id ? true : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToCartConfirmModal);
