import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
import CreateReviewFormContainer from './review_form/create_review_form_container';
const ReviewIndex = ({reviews, fetchReviews, match}) => {
    useEffect(() => {
        fetchReviews(match.params.productId)
        debugger
    },[])

    return (
        <div>
            {/* <CreateReviewFormContainer /> */}
            {/* <Link to={`/review/create-review/${match.params.productId}`}>Write a customer review</Link> */}
            <ul>
                {reviews.map( review => {
                    return <ReviewIndexItem  key={review.id} review={review}/>
                })}
            </ul>
        </div>
    )
}

export default ReviewIndex;