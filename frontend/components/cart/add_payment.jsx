import { connect } from "react-redux"
import React, { useEffect, useRef, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { closeModal } from "../../actions/modal_actions";


const AddPayment = ({currentUser, closeModal, history, paymentMethod, setPaymentMethod, address}) => {


    const [cardNumber, setCardNumber] = useState(paymentMethod?.cardNumber || '')
    const [nameOnCard, setNameOnCard] = useState(paymentMethod?.nameOnCard || '')
    const [expirationMonth, setExpirationMonth] = useState(paymentMethod?.expirationMonth || '')
    const [expirationYear, setExpirationYear] = useState(paymentMethod?.expirationYear || '')
    const [CCV, setCCV] = useState(paymentMethod?.ccv || '')
    const [cardType, setCardType] = useState(paymentMethod?.cardType || 'Visa')

    const [country, setCountry] = useState(address?.country || 'United States')
    const [fullName, setFullName] = useState(address?.fullName || '')
    const [phoneNumber, setPhoneNumber] = useState(address?.phoneNumber || '')
    const [address1, setAddress1] = useState(address?.paymentMethod1 || '')
    const [address2, setAddress2] = useState(address?.paymentMethod2 || '')
    const [city, setCity] = useState(address?.city || '')
    const [state, setState] = useState(address?.state || '')
    const [zipcode, setZipcode] = useState(address?.zipcode || '')

    const handleSubmit = (e) => {
        sessionStorage.setItem('paymentMethod', JSON.stringify({cardNumber: cardNumber, nameOnCard:nameOnCard, expirationMonth: expirationMonth, expirationYear: expirationYear, cardType: cardType, CCV: CCV}))
        setPaymentMethod({cardNumber, nameOnCard, expirationMonth, expirationYear, cardType, CCV})
        closeModal()
    }

    const getYearOptions = () => {
        let date = new Date
        let currentYear = date.getFullYear()
        let yearOptions = [];
        for(let i = 0; i < 15; i++) {
            yearOptions.push(<option value={currentYear}>{currentYear}</option>)
            currentYear++
        }
        return yearOptions
    }

    return(
        <form className="add-payment-form" onSubmit={(e) => handleSubmit(e)}>
            <header>Add a credit or debit card</header>
            <div className='add-payment-form-body'>
                <div className='add-payment-form-card'>
                    <p className="add-payment-form-section">Card number</p>
                    <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
                    
                </div>
                <div className='add-payment-form-name'>
                    <p className="add-payment-form-section">Name on card</p>
                    <input value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)}/>
                </div>
                <div className='add-payment-form-expiration'>
                    <p className="add-payment-form-section">Expiration date</p>
                    <div>
                        <select value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)} className='add-payment-expiration-month'>
                            <option value={'01'}>01</option>
                            <option value={'02'}>02</option>
                            <option value={'03'}>03</option>
                            <option value={'04'}>04</option>
                            <option value={'05'}>05</option>
                            <option value={'06'}>06</option>
                            <option value={'07'}>07</option>
                            <option value={'08'}>08</option>
                            <option value={'09'}>09</option>
                            <option value={'10'}>10</option>
                            <option value={'11'}>11</option>
                            <option value={'12'}>12</option>
                        </select>
                        <select value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)} className='add-payment-expiration-month'>
                            {getYearOptions()}
                        </select>
                    </div>
                </div>
                <br/>   
            </div>
            <header>
                <button type='button' onClick={() => closeModal()}>Cancel</button>
                <button type='submit'>Add your card</button>
            </header>
        </form>
    )
}

const AddPaymentModal = ({modal, closeModal, paymentMethod, setPaymentMethod, address, history}) => {
    
    if(modal !== 'addPayment') return null;

    return (
        <div className="address-modal-background" onClick={() => closeModal()}>
            <div className="payment-modal-child" onClick={e => e.stopPropagation()}>
                <AddPayment closeModal={closeModal} history={history} paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod}/>
            </div>
        </div>
    )
}

///////// Container ///////////

const mapStateToProps = state => {
    return {
        modal: state.modal,
        currentUser: state.entities.users[state.session.id]

    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPaymentModal))
