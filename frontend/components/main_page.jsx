import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBelt from './navigation_bar/navigation_bar';
import ProductIndexContainer from "./products/product_index/product_index_container"
import ProductShowContainer from './products/product_show/product_show_container';
import CartItemIndexContainer from './cart_items/cart_item_index_container'
import CreateReviewFormContainer from './reviews/review_form/create_review_form_container';

const MainPage = () => {
    return (
        <div className="main-page">
            <header>
                <NavBelt />
            </header>
            <main>
                <Switch>
                    <Route path="/products/:productId" component={ProductShowContainer}/>
                    <Route path="/products" component={ProductIndexContainer} />
                    <Route path="/cart" component={CartItemIndexContainer} />
                    <Route path="/" component={ProductIndexContainer} /> 
                </Switch>
            </main>


        </div>
    )
}

export default MainPage;