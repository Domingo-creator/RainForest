import React from 'react'
import { AuthRoute } from '../../util/route_util'
import AccountListContainer from './account_list/account_list_container'
// import LoginFormContainer from '../session_form/login_form_container'
// import SignupFormContainer from '../session_form/signup_form_container'

const NavBelt = () => {
    return (
        <nav className="nav-belt">
            <h1>RainForest</h1>
            <AccountListContainer />


        </nav>
    )
}

export default NavBelt