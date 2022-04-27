import React from 'react';
import SignInButtonWindow from './sign_in_button_window/sign_in_button_window';
import { connect } from "react-redux"
import { logout } from "../../../../actions/session_actions"
import {withRouter} from 'react-router'

const AccountListDropDown = ({currentUser, logout, history}) => {
        // debugger
        const handleLogOut = () => {
            logout();
            history.push('/')
        }

        return (
            <ul className='dropdown-menu'>
                <li>
                    { currentUser ? <></> : <SignInButtonWindow /> }
                </li>
                { currentUser ? <li onClick={handleLogOut}>Sign Out</li> : <></>}
            </ul>       
        )
}



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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountListDropDown))
