import React, { useEffect } from "react"
import StarRating from "./star_rating"

const ReviewIndexItem = ({review}) => {

    // const starRating = ()  => {
        
    // }
    return (
        <li>
            <p>{review.reviewer}</p>
            <div className="review-headline">
                <StarRating reviews={[review]} />
                <p>{review.headline}</p>
            </div>
            <p className='review-body'>{review.body}</p>
        </li>
    )
}

export default ReviewIndexItem