import React from 'react'
import AccountListContainer from './account_list/account_list_container'
import { Link } from 'react-router-dom'
import Logo from '../logo'
import SearchBarContainer from './search_bar/search_bar_container'

const NavBelt = () => {
    return (
        <nav className="nav-belt">
            <div className="nav-belt-bar-1">
                <Logo/>
                <SearchBarContainer />
                <AccountListContainer />
                <Link to='/cart'>[CART IMAGE]</Link>
            </div>
            <div className="nav-belt-bar-2">

            </div>
        </nav>
    )
}

export default NavBelt