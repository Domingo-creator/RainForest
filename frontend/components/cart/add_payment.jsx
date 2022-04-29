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
        <form className="add-address-form" onSubmit={(e) => handleSubmit(e)}>
            <header>Add a credit or debit card</header>
            <body>
            <label className="add-address-form-section">Card number
                <input value={cardNumber} onChange={(e) => setCardNumber(e.target.value)}/>
            </label>
            <label className="add-address-form-section">Name on card
                <input value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)}/>
            </label>
            <label className="add-address-form-section">Expiration date
                <select value={expirationMonth} onChange={(e) => setExpirationMonth(e.target.value)}>
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
                <select value={expirationYear} onChange={(e) => setExpirationYear(e.target.value)}>
                    {getYearOptions()}
                </select>
            </label>
            </body>
            <button type='button' onClick={() => closeModal()}>Cancel</button>
            <button type='submit'>Add your card</button>
        </form>
    )
}

const AddPaymentModal = ({modal, closeModal, paymentMethod, setPaymentMethod, address, history}) => {
    
    if(modal !== 'addPayment') return null;

    return (
        <div className="address-modal-background" onClick={() => closeModal()}>
            <div className="address-modal-child" onClick={e => e.stopPropagation()}>
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
