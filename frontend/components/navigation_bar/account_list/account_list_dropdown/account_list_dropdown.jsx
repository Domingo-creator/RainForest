import React from 'react';
import { Link } from 'react-router-dom';
import SignInButtonWindow from './sign_in_button_window/sign_in_button_window';

const AccountListDropDown = ({currentUser, logout}) => {
        // debugger
        return (
            <ul className='dropdown-menu'>
                <li>
                    { currentUser ? <></> : <SignInButtonWindow /> }
                </li>
                { currentUser ? <li onClick={logout}>Sign Out</li> : <></>}
            </ul>       
        )
}

export default AccountListDropDown