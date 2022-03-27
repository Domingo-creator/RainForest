import React,{ useState } from "react";
import { useEffect } from "react";

const ReviewForm = ({product, createReview, match, history}) => {
    const [rating, setRating] = useState(null);
    const [headline, setHeadline] = useState('');
    const [body, setBody] = useState('')
    // debugger

    const handleSubmit = (e) => {
        e.preventDefault();
        if(rating) createReview(match.params.productId, {rating, headline, body}).then( () => this.props.history.push())
    }

    const update = (field) => {
        debugger
        return (e) => {
            field === 'headline' ? setHeadline(e.target.value) : setBody(e.target.value)
        }
    }

    useEffect( () => {
        debugger
    },[])
    
    if (!product) {
        return <></>
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Create Review</h1>
            <label> Overall rating
                <input
                    type="radio"
                    value="5"
                    name="rating"
                    onChange={setRating(5)}
                />
                <input
                    type="radio"
                    value="4"
                    name="rating"
                    onChange={setRating(4)}
                />
                <input
                    type="radio"
                    value="3"
                    name="rating"
                    onChange={setRating(3)}
                />
                <input
                    type="radio"
                    value="2"
                    name="rating"
                    onChange={setRating(2)}
                />
                <input
                    type="radio"
                    value="1"
                    name="rating"
                    onChange={setRating(1)}
                />
            </label>
            <label>Add a headline
                <input
                    type="text"
                    value={headline}
                    // onChange={update('headline')}
                />
            </label>
            <label>Add a written review
                <textarea 
                    value={body}
                    // onChange={update('body')}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}
export default ReviewForm;