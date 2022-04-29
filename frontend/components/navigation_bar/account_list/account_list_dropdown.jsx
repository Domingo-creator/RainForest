import React from 'react';
import { connect } from "react-redux"
import { logout } from "../../../actions/session_actions"
import {withRouter} from 'react-router'
import { Link } from 'react-router-dom';
import { closeModal } from '../../../actions/modal_actions';


const AccountListDropDown = ({currentUser, logout, history}) => {
        // debugger
        const handleLogOut = () => {
            logout();
            history.push('/')
        }

        return (
            <ul className='dropdown-menu'>
                <li>
                    { currentUser ? 
                        <></> 
                    : 
                    <div className="login-signup">
                        <Link to='/login' className='session-button'>Sign In</Link>
                        <p>New Customer? <Link to='/signup' className='link'>Start here</Link></p>
                    </div>
                    }
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
        logout: () => dispatch(logout()),
        closeModal: () => dispatch(closeModal())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountListDropDown))
