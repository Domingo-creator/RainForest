import { connect } from "react-redux"
import { createCartItem, fetchCartItems } from "../../../actions/cart_item_actions"
import CartIcon from "./cart_icon"

const mapStateToProps = state => {
    return {
        userId: state.session.id,
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : [],
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCartItem: (userId, product) => dispatch(createCartItem(userId, product)),
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)