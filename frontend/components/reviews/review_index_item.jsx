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