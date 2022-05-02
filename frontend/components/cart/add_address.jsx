import { connect } from "react-redux"
import React, { useEffect, useRef, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { closeModal } from "../../actions/modal_actions";


const AddAddress = ({currentUser, closeModal, history, address, setAddress}) => {

    const [country, setCountry] = useState(address?.country || 'United States')
    const [fullName, setFullName] = useState(address?.fullName || '')
    const [phoneNumber, setPhoneNumber] = useState(address?.phoneNumber || '')
    const [address1, setAddress1] = useState(address?.address1 || '')
    const [address2, setAddress2] = useState(address?.address2 || '')
    const [city, setCity] = useState(address?.city || '')
    const [state, setState] = useState(address?.state || '')
    const [zipcode, setZipcode] = useState(address?.zipcode || '')



    const handleSubmit = (e) => {
        sessionStorage.setItem('address', JSON.stringify({country: country, fullName:fullName, phoneNumber: phoneNumber, address1: address1, address2: address2, city: city, state: state, zipcode: zipcode}))
        setAddress({country, fullName, phoneNumber, address1, address2, city, state, zipcode})
        closeModal()
    }

    const useDummyAddress = () => {
        sessionStorage.setItem('address', JSON.stringify({country: 'United States', fullName: 'Sir Demo of Demoville', phoneNumber:'555-555-5555', address1: '1234 Testing', address2:'Apt 5', city: 'Demoville', state:'CA', zipcode:'12345'}))
        setAddress({country: 'United States', fullName: 'Sir Demo of Demoville', phoneNumber:'555-555-5555', address1: '1234 Testing', address2:'Apt 5', city: 'Demoville', state:'CA', zipcode:'12345'})
        closeModal()
    }

    return(
        <form className="add-address-form" onSubmit={(e) => handleSubmit(e)}>
            <header>Enter a new shipping address</header>
            <body>
                <h2>Add a new address</h2>
                <label className="add-address-form-section">Country/Region
                    <br/>
                    <input value={country} onChange={(e) => setCountry(e.target.value)}/>
                </label>
                <label className="add-address-form-section">Full Name(First and Last name)
                    <br/>
                    <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </label>
                <label className="add-address-form-section">Phone Number
                    <br/>
                    <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </label>
                <label >Address
                    <br/>
                    <input type='text' value={address1} className='add-address-form-address' onChange={(e) => setAddress1(e.target.value)}/>
                    <input type='text' value={address2} className='add-address-form-address' onChange={(e) => setAddress2(e.target.value)}/>
                </label>
                <div className='add-address-bottom-row'>
                    <label>City
                        <br/>
                        <input type='text' value={city} className='add-address-form-city' onChange={(e) => setCity(e.target.value)}/>
                    </label>
                    <label>State
                        <br/>
                        <input value={state} className='add-address-form-state' onChange={(e) => setState(e.target.value)}/>
                    </label >
                    <label>Zip Code
                        <br/>
                        <input type='text' value={zipcode} className='add-address-form-zipcode' onChange={(e) => setZipcode(e.target.value)}/>
                    </label>   
                </div>
                <button>Use this address</button>
                <button type='button' onClick={useDummyAddress}>Use Demo Address</button>
            </body>
        </form>
    )
}

const AddAddressModal = ({modal, closeModal, address, setAddress, history}) => {
    
    if(modal !== 'addAddress') return null;

    return (
        <div className="address-modal-background" onClick={() => closeModal()}>
            <div className="address-modal-child" onClick={e => e.stopPropagation()}>
                <AddAddress closeModal={closeModal} history={history} address={address} setAddress={setAddress}/>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAddressModal))
