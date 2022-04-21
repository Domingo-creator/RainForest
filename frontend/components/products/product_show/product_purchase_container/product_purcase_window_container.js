import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createCartItem, updateCartItem } from "../../../../actions/cart_item_actions"
import ProductPurchaseWindow from "./product_purchase_window"

const mapStateToProps = (state, ownProps) => {
    return {
        userId: state.session.id,
        product: state.entities.product[ownProps.match.params.productId],
        cartItems: state.entitites.cartItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCartItem: (userId, cartItem) => dispatch(createCartItem(userId, cartItem)),
        updateCartItem: (cartItem) => dispatch(updateCartItem(cartItem)), 
        createNoUserCartItem: product => dispatch(createNoUserCartItem(product))

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductPurchaseWindow))