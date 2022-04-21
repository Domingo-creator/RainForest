import { withRouter } from "react-router-dom"
import { fetchReview, updateReview, deleteReview } from "../../actions/review_actions"

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        review: state.reviews[ownProps.match.params.reviewId]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReview: (productId, reviewId) => dispatch(fetchReview(productId, reviewId)),
        updateReview: (productId, review) => dispatch(updateReview(productId, review)),
        deleteReview: (productId, review) => dispatch(deleteReview(productId, review)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndexShow))

