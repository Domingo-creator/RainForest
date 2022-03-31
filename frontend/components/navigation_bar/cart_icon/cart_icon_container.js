import { connect } from "react-redux"
import { createCartItem } from "../../../actions/cart_item_actions"
import CartIcon from "./cart_icon"

const mapStateToProps = state => {
    return {
        userId: state.session.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCartItem: (userId, product) => dispatch(createCartItem(userId, product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)