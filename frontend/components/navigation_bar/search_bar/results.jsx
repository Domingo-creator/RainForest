import { connect } from "react-redux"
import React, { useEffect, useRef, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { closeModal } from "../../../actions/modal_actions";


const Results = ({results, closeModal, history}) => {

    const [resultSelected, _setResultSelected] = useState()
    const resultSelectedRef = useRef(resultSelected);
    const setResultSelected = (index) =>  {
        resultSelectedRef.current = index
        _setResultSelected(index)
    }
  

    const formatName = (name) => {
        return name.length > 50 ? name.slice(0, 50).concat('...') : name
    }

    const handleKeyDown = (e) => {
        
        switch(e.key) {
            case 'ArrowUp':
                resultSelectedRef.current !== undefined ? setResultSelected((resultSelectedRef.current - 1) % results.length) : setResultSelected(results.length - 1)
                break;
            case 'ArrowDown':
                resultSelectedRef.current !== undefined ? setResultSelected((resultSelectedRef.current + 1) % results.length) : setResultSelected(0)
                break;
            case 'Enter':
                // debugger
                history.push(`/products/${results[resultSelectedRef.current].id}`)
                closeModal()
                break;
            default:
                break;
        }
    }
   

    useEffect( () => {
            window.addEventListener('keyup',handleKeyDown);
        return () => {
            window.removeEventListener('keyup',handleKeyDown);
        }
    },[])


    return(
        <ul className="results-list">
            {results.map( (result, index) => 
                index < 10 ?
                    <Link to={`/products/${result.id}`} className='results-link'>
                        <li className={index == resultSelectedRef.current ? 'result-selected' : ''}>
                            <p>{formatName(result.name)} <span>from {result.category}</span></p>
                        </li>
                    </Link>
                    : 
                    null
            )}
        </ul>
    )
}

const ResultsModal = ({modal, results, closeModal, history}) => {
    
    if(modal !== 'results') return null;

    return (
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" >
                <Results results={results} closeModal={closeModal} history={history}/>
            </div>
        </div>
    )
}

///////// Container ///////////

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultsModal))
