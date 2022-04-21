import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchProduct } from "../../../actions/product_actions"
import { createReview } from "../../../actions/review_actions"

import ReviewForm from "./review_form"

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.entities.products[ownProps.match.params.productId],
        userId: state.entities.users[state.session.id].id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createReview: (productId, review) => dispatch(createReview(productId, review)),
        fetchProduct: (productId) => dispatch(fetchProduct(productId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm))