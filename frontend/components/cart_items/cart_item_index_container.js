import { connect } from "react-redux"
import { fetchCartItems, removeCartItem } from "../../actions/cart_item_actions"
import { fetchProduct } from "../../actions/product_actions"
import CartItemIndex from "./cart_item_index"

const mapStateToProps = state => {
    return {
        userId: state.entities.users[1].id,
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [],
        products: state.entities.products ? Object.values(state.entities.products) : []
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        removeCartItem: (userId, cartItemId) => dispatch(removeCartItem(userId, cartItemId)), 
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndex)