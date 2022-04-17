import { connect } from "react-redux"
import React from 'react'
import { Link } from 'react-router-dom';
import { closeModal } from "../../../actions/modal_actions";

const Results = ({results}) => {

    const formatName = (name) => {
        return name.length > 50 ? name.slice(0, 50).concat('...') : name
    }

    return(
        <ul className="results-list">
            {results.map( (result, index) => 
                index < 10 ?
                    <Link to={`/products/${result.id}`} className='results-link'>
                        <li>
                            <p>{formatName(result.name)} <span>from {result.category}</span></p>
                        </li>
                    </Link>
                    : 
                    null
            )}
        </ul>
    )
}

const ResultsModal = ({modal, results, closeModal}) => {
    if(!modal) return null;

    return (
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" >
                <Results results={results} />
            </div>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        modal: state.modal,
        results: Object.values(state.entities.searchResults)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsModal)
