import React, { useEffect } from "react"

const ReviewIndexItem = ({review}) => {
  
    return (
        <li key={review.id}>
            {review.rating}
            {review.body}
        </li>
    )
}