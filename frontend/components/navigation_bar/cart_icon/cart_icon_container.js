import { connect } from "react-redux"
import { createCartItem, createNoUserCartItem, fetchCartItems } from "../../../actions/cart_item_actions"
import CartIcon from "./cart_icon"

const mapStateToProps = state => {
    // debugger
    return {
        userId: state.session.id,
        // cartItems: state.session.id ? state.entities.cart_items ? Object.values(state.entities.cart_items) : [] : JSON.parse(sessionStorage.getItem('cart')),
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [] 

    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCartItem: (userId, product) => dispatch(createCartItem(userId, product)),
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)