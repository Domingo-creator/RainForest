import React, { useRef, useState } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import NavBelt from './navigation_bar/navigation_bar';
import ProductIndex from "./products/product_index/product_index"
import ProductShow from './products/product_show/product_show';
import CreateReviewFormContainer from './reviews/review_form/create_review_form_container';
import HomePage from './home_page/homepage';
import Results from './navigation_bar/search_bar/results';
import Logo from './navigation_bar/logo';
import Cart from './cart/cart'

const MainPage = ({history}) => {

    const [filter, setFilter] = useState(sessionStorage.getItem('filter') ? JSON.parse(sessionStorage.getItem('filter')) : {department:'All Departments', searchText:''});
    const [tempCart, setTempCart] = useState(sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []);

    const updateTempCart = (newTempCart) => {
        setTempCart(newTempCart)
        if(newTempCart.length) {
            sessionStorage.setItem('cart', JSON.stringify(newTempCart))
        } else {
            sessionStorage.removeItem('cart')
        }
    }

    const updateFilter = (newFilter) => {
        // debugger
        sessionStorage.setItem('filter', JSON.stringify(newFilter))
        setFilter(newFilter)
    }

    // debugger
    return (
        <div className="main-page">
            <header>
                <NavBelt tempCart={tempCart} updateTempCart={updateTempCart} filter={filter} updateFilter={updateFilter}/>
                <Results />
                {/* <BuyNow />  */}
            </header>
            <main>
                <Switch>
                    <Route path="/products/:productId/reviews/new" component={CreateReviewFormContainer} />
                    <Route path="/products/:productId/reviews/:reviewId/edit" component={CreateReviewFormContainer} />
                    <Route path="/products/:productId" render = { () => (<ProductShow tempCart={tempCart} updateTempCart={updateTempCart}/>)} />
                    <Route path="/products" render = {() => <ProductIndex filter={filter}/>}/>
                    <Route path="/cart" render = { () => <Cart tempCart={tempCart} updateTempCart={updateTempCart} /> } />
                    <Route path="/" component={HomePage} /> 
                </Switch>
            </main>
            <footer>
                <div></div>
                <div className="footer-section-2">
                    <ul className="icons">
						<li><a href="https://www.linkedin.com/in/david-domingo-896b74ba/" target="_blank"><i className="devicon-linkedin-plain-wordmark link-icon"></i></a></li>
						<li><a href="https://github.com/Domingo-creator/" target="_blank"><i className="devicon-github-original-wordmark git-icon"></i></a></li>
						<li><a href="https://angel.co/u/david-domingo-5" target="_blank"><i className="fab fa-angellist git-icon"></i></a></li>
					</ul>
                </div>
                <div className="footer-section-3">
                    <Logo/>
                </div>
            </footer>


        </div>
    )
}

export default withRouter(MainPage);
