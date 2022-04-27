import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBelt from './navigation_bar/navigation_bar';
import ProductIndexContainer from "./products/product_index/product_index_container"
import ProductShowContainer from './products/product_show/product_show_container';
// import CartItemIndexContainer from './cart/cart_item_index_container'
import CreateReviewFormContainer from './reviews/review_form/create_review_form_container';
import HomePage from './home_page/homepage';
import Results from './navigation_bar/search_bar/results';
// import BuyNow from './products/product_show/product_purchase_container/buy_now';
// import CartCheckout from './cart_items/cart_checkout';
import Logo from './logo';
// import CartBuyNow from './cart_items/car_buy_now';
import Cart from './cart/cart'

const MainPage = () => {

    const [sessionStorageUpdate, setSessionStorageUpdate] = useState(1)
    

    // debugger
    return (
        <div className="main-page">
            <header>
                
                <NavBelt sessionStorageUpdate={sessionStorageUpdate}/>
                <Results />
                {/* <BuyNow />  */}
            </header>
            <main>
                <Switch>
                    <Route path="/products/:productId/reviews/new" component={CreateReviewFormContainer} />
                    <Route path="/products/:productId/reviews/:reviewId/edit" component={CreateReviewFormContainer} />
                    <Route path="/products/:productId" render = { (props) => (<ProductShowContainer sessionStorageUpdate={sessionStorageUpdate} setSessionStorageUpdate={setSessionStorageUpdate}/>)} />
                    <Route path="/products" component={ProductIndexContainer}/>
                    <Route path="/cart" render = { (props) => (<Cart sessionStorageUpdate={sessionStorageUpdate} setSessionStorageUpdate={setSessionStorageUpdate}/>) } />
                    <Route path="/" component={HomePage} /> 
                </Switch>
            </main>
            <footer>
                <div></div>
                <div className="footer-section-2">
                    <ul className="icons">
						<li><a href="https://www.linkedin.com/in/david-domingo-896b74ba/" target="_blank"><i class="devicon-linkedin-plain-wordmark link-icon"></i></a></li>
						<li><a href="https://github.com/Domingo-creator/" target="_blank"><i class="devicon-github-original-wordmark git-icon"></i></a></li>
						<li><a href="https://angel.co/u/david-domingo-5" target="_blank"><i class="fab fa-angellist git-icon"></i></a></li>
					</ul>
                </div>
                <div className="footer-section-3">
                    <Logo/>
                </div>
            </footer>


        </div>
    )
}

export default MainPage;