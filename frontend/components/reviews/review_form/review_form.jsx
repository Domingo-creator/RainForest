import React,{ useState } from "react";
import { useEffect } from "react";

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

    useEffect( () => {
        fetchProduct(match.params.productId)
    },[])

   
    if (!product) {
        return <></>
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Review</h1>
            <label onChange={updateRating}> Overall rating
                <input
                    type="radio"
                    value="5"
                    name="rating"
                    onChange={updateRating}
                />
                <input
                    type="radio"
                    value="4"
                    name="rating"
                    onChange={updateRating}
                />
                <input
                    type="radio"
                    value="3"
                    name="rating"
                    onChange={updateRating}
                />
                <input
                    type="radio"
                    value="2"
                    name="rating"
                    onChange={updateRating}
                />
                <input
                    type="radio"
                    value="1"
                    name="rating"
                    onChange={updateRating}
                />
            </label>
            <label>Add a headline
                <input
                    type="text"
                    value={headline}
                    onChange={update('headline')}
                />
            </label>
            <label>Add a written review
                <textarea 
                    value={body}
                    onChange={update('body')}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}
export default ReviewForm;