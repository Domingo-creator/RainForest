import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { createReview } from "../../../util/review_api_util"
import ReviewForm from "./review_form"

const mapStateToProps = (state, ownProps) => {
    return {
        productId: state.entities.products[ownProps.match.params.productId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createReview: (productId, review) => dispatch(createReview(productId,review))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm))