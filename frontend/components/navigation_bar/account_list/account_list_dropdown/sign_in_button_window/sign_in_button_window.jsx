import React from 'react'
import { Link } from 'react-router-dom';

const SignInButtonWindow = () => {
    return (
        <div className="login-signup">
            <Link to='/login' className='session-button'>Sign In</Link>
            <p>New Customer? <Link to='/signup' className='link'>Start here</Link></p>
        </div>
    )
}

export default SignInButtonWindow;