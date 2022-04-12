import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';
import CreateReviewFormContainer from './review_form/create_review_form_container';
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

export default ReviewIndex;