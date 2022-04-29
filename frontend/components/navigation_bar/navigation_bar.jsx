import React, { useState } from 'react'
import AccountList from './account_list/account_list'
import Logo from './logo'
import SearchBar from './search_bar/search_bar'
import CategoryLink from './category_link'
import CartIcon from './cart_icon/cart_icon'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchProducts } from "../../actions/product_actions"

const NavBelt = ({fetchProducts, history, userId, filter, updateFilter, tempCart, updateTempCart}) => {
    if(sessionStorage.getItem('department') === 'undefined') sessionStorage.setItem('department', 'All Departments')
    if(!userId && !sessionStorage.getItem('cart')) sessionStorage.setItem('cart', '')

    const [searchText, setSearchText] = useState(sessionStorage.getItem('searchText') || '')
 
    return (
        <nav className="nav-belt">
            <div className="nav-belt-bar-1">
                <Logo setSearchText={setSearchText}/>
                {/* <DeliverToContainer /> */}
                <SearchBar searchText={searchText} setSearchText={setSearchText} filter={filter} updateFilter={updateFilter}/>
                <AccountList />
                <CartIcon updateTempCart={updateTempCart} tempCart={tempCart}/>
                
            </div>

            <div className="nav-belt-bar-2">
                <CategoryLink category={'All Products'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
                <CategoryLink category={'Toys & Games'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
                <CategoryLink category={'Health & Household'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
                <CategoryLink category={'Fashion'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
                <CategoryLink category={'Electronics'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
                <CategoryLink category={'Pet Supplies'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
                <CategoryLink category={'Sporting Goods'} fetchProducts={fetchProducts} history={history} setSearchText={setSearchText} updateFilter={updateFilter}/>
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