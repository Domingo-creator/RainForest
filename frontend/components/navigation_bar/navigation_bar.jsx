import React, { useState } from 'react'
// import AccountListContainer from './account_list/account_list_container'
import AccountList from './account_list/account_list'
import Logo from '../logo'
import SearchBar from './search_bar/search_bar'
import CategoryLink from './category_link'
import CartIcon from './cart_icon/cart_icon'


import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchProducts } from "../../actions/product_actions"
// import NavBelt from "./navigation_bar"

const NavBelt = ({fetchProducts, history, userId, sessionStorageUpdate}) => {
    if(sessionStorage.getItem('department') === 'undefined') sessionStorage.setItem('department', 'All Departments')
    if(!userId && !sessionStorage.getItem('cart')) sessionStorage.setItem('cart', '')
    const [department, setDepartment] = useState(sessionStorage.getItem('department'))
    const[searchText, setSearchText] = useState(sessionStorage.getItem('searchText') || '')
    // const [cart, setCart] = useState(sessionStorage.getItem('cart'))


    // debugger
    return (
        <nav className="nav-belt">
            <div className="nav-belt-bar-1">
                <Logo setSearchText={setSearchText}/>
                {/* <DeliverToContainer /> */}
                <SearchBar setDepartment={setDepartment} department={department} searchText={searchText} setSearchText={setSearchText}/>
                <AccountList />
                <CartIcon sessionStorageUpdate={sessionStorageUpdate}/>
                
            </div>

            <div className="nav-belt-bar-2">
                <CategoryLink category={'All Products'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Toys & Games'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Health & Household'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Fashion'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Electronics'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Pet Supplies'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
                <CategoryLink category={'Sporting Goods'} fetchProducts={fetchProducts} history={history} department={department} setDepartment={setDepartment} setSearchText={setSearchText}/>
            </div>
        </nav>
    )
}


////// Container ////////

const mapStateToProps = state => {
    return {
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBelt))