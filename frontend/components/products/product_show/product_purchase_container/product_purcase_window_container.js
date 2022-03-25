import { connect } from "react-redux"
import { createCartItem } from "../../../../actions/cart_item_actions"
import ProductPurchaseWindow from "./product_purchase_window"

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        userId: state.session.id,
        product: state.entities.product[ownProps.match.params.productId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCartItem: (userId, cartItem) => dispatch(createCartItem(userId, cartItem)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPurchaseWindow)