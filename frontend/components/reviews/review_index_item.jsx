import React, { useEffect } from "react"
import StarRating from "./star_rating"
import {AiOutlineUser} from 'react-icons/ai'

const ReviewIndexItem = ({review}) => {

    return (
        <li>
            <div className="reviewer-info">
                <AiOutlineUser size={34}/>
                <p>{review.reviewer}</p>
            </div>
                
            <div className="review-headline">
                <StarRating reviews={[review]} />
                <p>{review.headline}</p>
            </div>
            <p className='review-body'>{review.body}</p>
        </li>
    )
}

export default ReviewIndexItem

// import { withRouter } from "react-router-dom"
// import { fetchReview, updateReview, deleteReview } from "../../actions/review_actions"

// const mapStateToProps = (state, ownProps) => {
//     // debugger
//     return {
//         review: state.reviews[ownProps.match.params.reviewId]
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchReview: (productId, reviewId) => dispatch(fetchReview(productId, reviewId)),
//         updateReview: (productId, review) => dispatch(updateReview(productId, review)),
//         deleteReview: (productId, review) => dispatch(deleteReview(productId, review)),
//     }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndexItem))
