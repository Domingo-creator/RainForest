import React from 'react';
import { Link } from 'react-router-dom';
import AccountListDropDown from './account_list_dropdown/account_list_dropdown';

import { connect } from "react-redux"
import { logout } from "../../../actions/session_actions"

const Greeting = ({currentUser, logout}) => {

    const personalGreeting = () => {
        return (
            <div className="account-list-container">
                <div className="account-list-header">
                    <p className='nav-line-1'>Hello, {currentUser ? currentUser.username : 'Sign In'}</p>
                    <p className='nav-line-2'>Accounts & Lists</p>
                </div>
                <div className="account-list-dropdown-content">
                    <AccountListDropDown />
                </div>
            </div>
        )
    }
    
    return personalGreeting()
    
}


////// Container  //////

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)