import { RECEIVE_SEARCH_RESULTS } from "../actions/product_actions"

const searchResultsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_SEARCH_RESULTS:
            return action.results
        default:
            return oldState
    }
}

export default searchResultsReducer;