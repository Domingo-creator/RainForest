import { connect } from "react-redux"
import { fetchCartItems, removeCartItem, updateCartItem } from "../../actions/cart_item_actions"
// import { fetchProducts } from "../../actions/product_actions"
import CartItemIndex from "./cart_item_index"

const mapStateToProps = state => {
    return {
        userId: state.session.id,
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        removeCartItem: (userId, cartItemId) => dispatch(removeCartItem(userId, cartItemId)), 
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
        // fetchProducts: (filter) => dispatch(fetchProducts(filter)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndex)