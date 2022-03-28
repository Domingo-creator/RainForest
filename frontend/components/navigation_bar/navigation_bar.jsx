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
                <Link to='/products' className='nav-link'>All Products</Link>
                <p className='nav-link'>Toys & Games</p> 
                <p className='nav-link'>Fashion</p>
                <p className='nav-link'>Smart Home</p>
                <p className='nav-link'>Pet Supplies</p>
                <p className='nav-link'>Sporting Goods</p> 
            </div>
        </nav>
    )
}

export default NavBelt