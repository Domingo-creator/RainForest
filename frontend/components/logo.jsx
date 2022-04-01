import React from 'react'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/" className="logo">RainForest
            <img src='https://rainforest-dev.s3.us-west-1.amazonaws.com/amazonArrow.png' />
        </Link>

    )
}

export default Logo;