import React, { useState } from 'react'
import AccountListContainer from './account_list/account_list_container'
import Logo from '../logo'
import SearchBar from './search_bar/search_bar'
import CategoryLink from './category_link'
import CartIconContainer from './cart_icon/cart_icon_container'

const NavBelt = ({fetchProducts, history, userId}) => {
    if(localStorage.getItem('department') === 'undefined') localStorage.setItem('department', 'All Departments')
    if(!userId && !localStorage.getItem('cart')) localStorage.setItem('cart', '')
    const [department, setDepartment] = useState(localStorage.getItem('department'))
    // const [cart, setCart] = useState(localStorage.getItem('cart'))

    return (
        <nav className="nav-belt">
            <div className="nav-belt-bar-1">
                <Logo/>
                {/* <DeliverToContainer /> */}
                <SearchBar setDepartment={setDepartment} department={department}/>
                <AccountListContainer />
                <CartIconContainer />
                
            </div>

            <div className="nav-belt-bar-2">
                <CategoryLink category={'All Products'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>
                <CategoryLink category={'Toys & Games'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>
                <CategoryLink category={'Health & Household'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>
                <CategoryLink category={'Fashion'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>
                <CategoryLink category={'Electronics'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>
                <CategoryLink category={'Pet Supplies'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>
                <CategoryLink category={'Sporting Goods'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment}/>

                {/* <p className='nav-link'>Toys & Games</p> 
                <p className='nav-link'>Fashion</p>
                <p className='nav-link'>Smart Home</p>
                <p className='nav-link'>Pet Supplies</p>
                <p className='nav-link'>Sporting Goods</p>  */}
            </div>
        </nav>
    )
}

export default NavBelt