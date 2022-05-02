import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../../actions/modal_actions'
import {AiFillCheckCircle} from 'react-icons/ai'

const CartMergedNotice = ({totalMergedToCart}) => {
    return (
        <div className="cart-merged-notice-container">
            <p>Cart merged...</p>
            <div className='add-to-cart-confirm-message'>
                <AiFillCheckCircle className="green-checkmark2"/>
                <p>{totalMergedToCart.current} item{totalMergedToCart.current > 1 ? 's' : ''} added to cart</p>
            </div>
        </div>
    )
}

const CartMergedNoticeModal = ({modal, closeModal, totalMergedToCart}) => {
    let [modalClosing, setModalClosing] = useState(false);
    
    useEffect( () => {
        setTimeout( slideOutModal, 4000) 
    }, [])

    const slideOutModal = () => {
        if(!modalClosing){
            setModalClosing(true)
                setTimeout( () => {
                    setModalClosing(false);
                    closeModal()
                }, 800)
        };
    }
    
    if(modal !== 'cartMergedNotice') return null

    return (
        <div className={(modalClosing ? "cart-merged-notice-closed" : "cart-merged-notice-open")  + " cart-merged-notice-modal"}>
            <CartMergedNotice totalMergedToCart={totalMergedToCart}/>
        </div>
            
    )
    
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMergedNoticeModal)