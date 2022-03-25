import React, { useEffect } from 'react';
import CreateReviewFormContainer from './review_form/create_review_form_container';

const ReviewIndex = ({reviews, fetchReviews, match}) => {
    useEffect(() => {
        fetchReviews(match.params.productId)
    },[])

    return (
        <div>
            <CreateReviewFormContainer />
            <ul>
                {reviews.map( review => {
                    <ReviewIndexItem review={review}/>
                })}
            </ul>
        </div>
    )
}

export default ReviewIndex;