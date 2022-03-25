import React from 'react'
import AccountListContainer from './account_list/account_list_container'
import { Link } from 'react-router-dom'
import Logo from '../logo'

const NavBelt = () => {
    return (
        <nav className="nav-belt">
            <Logo/>
            <AccountListContainer />
            <Link to='/cart'>[CART IMAGE]</Link>


        </nav>
    )
}

export default NavBelt