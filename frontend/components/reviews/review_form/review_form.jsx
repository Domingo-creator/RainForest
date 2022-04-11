import React,{ useState } from "react";
import { useEffect } from "react";
import {MdStar, MdStarOutline} from 'react-icons/md'


const ReviewForm = ({product, fetchProduct, createReview, userId, match, history}) => {
    const [rating, setRating] = useState(null);
    const [headline, setHeadline] = useState('');
    const [body, setBody] = useState('')
    // debugger

    const handleSubmit = (e) => {
        e.preventDefault();
        if(rating) {
            createReview(product.id, {rating, headline, body, userId: userId, productId: product.id})
                .then( () => history.push(`/products/${product.id}`))
        }
    }

    const update = (field) => {
        return (e) => {
            field === 'headline' ? setHeadline(e.target.value) : setBody(e.target.value)
        }
    }

    const updateRating = (e) => setRating(e.target.value)
    const fullStar = (radioInput) => <MdStar className="stars" size={30} color="#fea41d"/>
    const emptyStar = (radioInput) => <MdStarOutline className="stars" size={30} color="#fea41d"/>

    const radioInput = (ratingScore) =>  <input
                                            type="radio"
                                            value={ratingScore}
                                            name="rating"
                                            className="rating-star"
                                            onChange={updateRating}
                                         />


    useEffect( () => {
        fetchProduct(match.params.productId)
    },[])

   
    if (!product) {
        return <></>
    }

    return (
        <form onSubmit={handleSubmit} className="review-form">
            <h1>Create Review</h1>
            <div> 
                <h3>Overall rating</h3>
                <div onChange={updateRating} className="review-form-rating">
                    <label>
                        {rating >= 1 ? fullStar() : emptyStar()}
                        {radioInput(1)}
                    </label>
                    <label>
                        {rating >= 2 ? fullStar() : emptyStar()}
                        {radioInput(2)}
                    </label>
                    <label>
                        {rating >= 3 ? fullStar() : emptyStar()}
                        {radioInput(3)}
                    </label>
                    <label>
                        {rating >= 4 ? fullStar() : emptyStar()}
                        {radioInput(4)}
                    </label>
                    <label>
                        {rating >= 5 ? fullStar() : emptyStar()}
                        {radioInput(5)}
                    </label>

                </div>
            </div>
            <div>
                <h3>Add a headline</h3>
                <input
                    type="text"
                    value={headline}
                    onChange={update('headline')}
                    className="review-headline"
                />
            </div>
            <div>
                <h3>Add a written review</h3>
                <textarea 
                    value={body}
                    onChange={update('body')}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}
export default ReviewForm;