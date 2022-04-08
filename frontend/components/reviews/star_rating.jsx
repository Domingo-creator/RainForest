import React from 'react'
import {MdStar, MdStarOutline, MdStarHalf} from 'react-icons/md'

const StarRating = ({reviews}) => {

    
    const emptyStar = () => <MdStarOutline className="stars" size={15} color="#fea41d" />
    const halfStar = () => <MdStarHalf className="stars" size={15} color="#fea41d" />
    const fullStar = () => <MdStar className="stars" size={15} color="#fea41d" />
    
    let reviewScore = 0.00;
    reviews.forEach( review => reviewScore += review.rating )
    const rating = reviews.length ? reviewScore/reviews.length : 0

    return (
     <div>
         { rating > .95 ? fullStar() : rating > .45 ? halfStar() : emptyStar()}
         { rating > 1.95 ? fullStar() : rating > 1.45 ? halfStar() : emptyStar()}
         { rating > 2.95 ? fullStar() : rating > 2.45 ? halfStar() : emptyStar()}
         { rating > 3.95 ? fullStar() : rating > 3.45 ? halfStar() : emptyStar()}
         { rating > 4.95 ? fullStar() : rating > 4.45 ? halfStar() : emptyStar()}

     </div>   
    )
}

export default StarRating