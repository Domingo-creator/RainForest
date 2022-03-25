import { connect } from "react-redux"
import { fetchCartItems, removeCartItem } from "../../actions/cart_item_actions"
import CartItemIndex from "./cart_item_index"

const mapStateToProps = state => {
    debugger
    return {
        userId: state.entities.users[1].id,
        cartItems: state.entities.cart_items ? Object.values(state.entities.cart_items) : []
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCartItems: (userId) => dispatch(fetchCartItems(userId)),
        removeCartItem: (userId, cartItemId) => dispatch(removeCartItem(userId, cartItemId)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndex)