import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

const Logo = ({setSearchText,closeModal}) => {
    
    const clearSearchText = () => {
        sessionStorage.removeItem('searchText')
        closeModal();
        setSearchText('')
    }

    return (
        <Link to="/" onClick={clearSearchText} className="logo">RainForest
            <img src='https://rainforest-dev.s3.us-west-1.amazonaws.com/amazonArrow.png' />
        </Link>

    )
}


const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(null, mapDispatchToProps)(Logo);