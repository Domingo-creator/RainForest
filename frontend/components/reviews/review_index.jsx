import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
import CreateReviewFormContainer from './review_form/create_review_form_container';
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { fetchReviews } from "../../actions/review_actions"

const ReviewIndex = ({reviews, fetchReviews, match}) => {

    useEffect(() => {
        fetchReviews(match.params.productId)
    },[])

    return (
        <div>
            
            <ul className='review-list'>
                {reviews.map( review => {
                    return <ReviewIndexItem  key={review.id} review={review}/>
                })}
            </ul>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => {
    return {
        reviews: state.entities.reviews ? Object.values(state.entities.reviews): []
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: (productId) => dispatch(fetchReviews(productId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex))