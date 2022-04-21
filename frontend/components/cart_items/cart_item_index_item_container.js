import { connect, } from "react-redux"
import { fetchProduct } from "../../actions/product_actions"
import CartItemIndexItem from "./cart_item_index_item"
import { removeCartItem, updateCartItem } from "../../actions/cart_item_actions"

const mapStateToProps = (state, ownProps) => {
    return {
        cartItem: state.entities.cartItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        removeProduct: (productId) => dispatch(removeCartItem(productId)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndexItem)