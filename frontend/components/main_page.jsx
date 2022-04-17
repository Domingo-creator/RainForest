import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBeltContainer from './navigation_bar/navigation_bar_container';
import ProductIndexContainer from "./products/product_index/product_index_container"
import ProductShowContainer from './products/product_show/product_show_container';
import CartItemIndexContainer from './cart_items/cart_item_index_container'
import CreateReviewFormContainer from './reviews/review_form/create_review_form_container';
import homepage from './home_page/homepage';
import Results from './navigation_bar/search_bar/results.';

const MainPage = () => {
    
    return (
        <div className="main-page">
            <header>
                <NavBeltContainer />
                <Results />
            </header>
            <main>
                <Switch>
                    <Route path="/products/:productId/reviews/new" component={CreateReviewFormContainer} />
                    <Route path="/products/:productId/reviews/:reviewId/edit" component={CreateReviewFormContainer} />
                    <Route path="/products/:productId" component={ProductShowContainer}/>
                    <Route path="/products" component={ProductIndexContainer} />
                    <Route path="/cart" component={CartItemIndexContainer} />
                    <Route path="/" component={homepage} /> 
                </Switch>
            </main>
            <footer>
                
            </footer>


        </div>
    )
}

export default MainPage;