import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchCartItems, updateCartItem } from "../../actions/cart_item_actions"
import { openModal } from "../../actions/modal_actions"
import { formatCheckoutPrice } from "../../util/formatting_util"
import AddAddress from "./add_address"
import AddPayment from "./add_payment"
import CartCheckoutItem from "./cart_checkout_item"

const CartCheckout = ({currentUserId, setCartItemsSelected, cartItemsSelected, cartItems, fetchCartItems, openModal}) => {

    const [address, setAddress] = useState(sessionStorage.getItem('address') ? JSON.parse(sessionStorage.getItem('address')) : undefined);
    const [paymentMethod, setPaymentMethod] = useState(sessionStorage.getItem('paymentMethod') ? JSON.parse(sessionStorage.getItem('paymentMethod')) : undefined);

    useEffect( () => {
        if(currentUserId) fetchCartItems(currentUserId)
        if(!Object.keys(cartItemsSelected).length) setCartItemsSelected(JSON.parse(sessionStorage.getItem('cartItemsSelected'))) 
    },[])

    const calcSubtotal = () => {
        let subtotal = 0.00;
        cartItems.forEach( cartItem => subtotal += cartItemsSelected[cartItem.productId] ? (cartItem.price * cartItem.quantity) : 0)
        return subtotal.toFixed(2);
    }

    const calcItemCount = () => {
        let count = 0;
        cartItems.forEach( cartItem => count += cartItemsSelected[cartItem.productId] ?  cartItem.quantity : 0)
        return count
    }
    
    const calcTax = () => {
        return (calcSubtotal() * .10).toFixed(2)
    }

    const calcTotal = () => {
        return (parseFloat(calcSubtotal())+ parseFloat(calcTax())).toFixed(2)
    }
    
    const itemCount = calcItemCount()
    const checkoutItems = cartItems.filter( cartItem => cartItemsSelected[cartItem.productId])

    return (
        <div className='cart-checkout-container'>
            <AddAddress address={address} setAddress={setAddress}/>
            <AddPayment paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} address={address}/>
            <div className='cart-checkout-container-side-1'>

                <div className='cart-checkout-shipping-address'>
                    <div className='cart-checkout-shipping-address-section1'>
                        <h3>1 <span>Shipping Address</span></h3>
                        {address ? 
                        <div>
                            <p>{address.fullName}</p>
                            <p>{address.address1} {address.address2}</p>
                            <p>{address.city}, {address?.state} {address.zipcode}</p>
                        </div>
                        : <></>
                        }
                    </div>
                    <div className="checkout-add-address">
                        <p  onClick={() => openModal('addAddress')}>{address ? 'Change' : 'Add Address'}</p>
                    </div>  
                </div>

                <div className='cart-checkout-payment-method'>
                    <div className='cart-checkout-shipping-address-section1'>
                        <h3>2 <span>Payment Method</span></h3>
                        {paymentMethod ? 
                        <div>{`${paymentMethod.cardType} ending with ${paymentMethod.cardNumber.slice(-4)}`} </div>
                        : <></>
                        }
                    </div>
                    <div className="checkout-add-address">
                        <p  onClick={() => openModal('addPayment')}>{paymentMethod ? 'Change' : 'Add credit or debit card'}</p>
                    </div>  

                </div>

                <div className='cart-checkout-review-items'>
                    <h3>3 <span>Review items and shipping</span></h3>
                    <div>
                        <ul>
                            {checkoutItems.map( checkoutItem => 
                                <CartCheckoutItem checkoutItem={checkoutItem}/>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
            <div className="cart-checkout-container-side-2">
                <button className='cart-checkout-button'>Place your order</button>
                <div className='cart-checkout-order-summary'>
                    <h3>Order Summary</h3>
                    <div>
                        <p>items:{itemCount > 1 ? `(${itemCount})` : ``}</p>
                        <p>{`$${calcSubtotal()}`}</p>
                    </div>
                    <div className="cart-checkout-order-summary-section1">
                        <p>Shipping & handling:</p>
                        <p className='underborder'>$0.00</p>
                    </div>
                    <div>
                        <p>Total before tax:</p>
                        <p>{`$${calcSubtotal()}`}</p>
                    </div>
                    <div>
                        <p>Estimated tax to be collected</p>
                        <p>{`$${calcTax()}`}</p>
                    </div>
                </div>
                <div className='cart-checkout-total'>
                    <h3>Order total:</h3>
                    <h3>{formatCheckoutPrice(calcTotal())}</h3>
                </div>
            </div>
        </div>
    )
}

////// CONTAINER ///////  

const mapStateToProps = state => {

    return {
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [],
        currentUserId: state.session.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartCheckout)