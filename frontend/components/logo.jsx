import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({setSearchText}) => {
    
    const clearSearchText = () => {
        sessionStorage.removeItem('searchText')
        setSearchText('')
    }

    return (
        <Link to="/" onClick={clearSearchText} className="logo">RainForest
            <img src='https://rainforest-dev.s3.us-west-1.amazonaws.com/amazonArrow.png' />
        </Link>

    )
}

export default Logo;