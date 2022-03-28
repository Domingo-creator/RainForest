import { connect } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { createCartItem } from "../../../actions/cart_item_actions"
import { fetchProduct } from "../../../actions/product_actions"
import ProductShow from "./product_show"

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId],
        userId: state.session.id,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (productId) => dispatch(fetchProduct(productId)),
        createCartItem: (userId, product) => dispatch(createCartItem(userId, product)) 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductShow))