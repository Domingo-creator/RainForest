import { connect } from "react-redux"
import { fetchProduct } from "../../actions/product_actions"
import CartItemIndexItem from "./cart_item_index_item"

const mapStateToProps = (state, ownProps) => {
    return {
        cartItem: state.entities.cartItems,
        // product:
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        deleteProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemIndexItem)