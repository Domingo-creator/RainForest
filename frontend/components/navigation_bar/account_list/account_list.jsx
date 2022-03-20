import React from 'react';
import { Link } from 'react-router-dom';
import AccountListDropDownContainer from './account_list_dropdown/account_list_dropdown_container';

const Greeting = ({currentUser, logout}) => {
    // debugger
    // const sessionLinks = () => {
    //     return (
    //         <div className="login-signup">
    //             <Link to='/login'>Log In</Link>
    //             <Link to='/signup'>Sign Up</Link>
    //         </div>
    //     )
    // };

    const personalGreeting = () => {
        return (
            <div className="account-list-container">
                <div className="account-list-header">
                    <p className='nav-line-1'>Hello, {currentUser ? currentUser.username : 'Sign In'}</p>
                    <p className='nav-line-2'>Accounts & Lists</p>
                </div>
                <div className="account-list-dropdown-content">
                    <AccountListDropDownContainer />
                {/* <button onClick={logout}>Log Out</button> */}
                </div>
            </div>
        )
    }
    
    return personalGreeting()
    // return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;