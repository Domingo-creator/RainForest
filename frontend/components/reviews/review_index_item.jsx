import React, { useEffect } from "react"

const ReviewIndexItem = ({review}) => {
    return (
        <li>
            <label>Rating   
                <p>{review.rating}</p>
            </label>
            <h2>{review.headline}</h2>

            <p>{review.body}</p>
        </li>
    )
}

export default ReviewIndexItem