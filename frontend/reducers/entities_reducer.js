import { combineReducers } from "redux";
import cartItemsReducer from "./cart_items_reducer";
import productsReducer from "./products_reducer";
import reviewsReducer from "./reviews_reducer";
import searchResultsReducer from "./search_results_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productsReducer,
    cart_items: cartItemsReducer,
    reviews: reviewsReducer,
    searchResults: searchResultsReducer
})

export default entitiesReducer;