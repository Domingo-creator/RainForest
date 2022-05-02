import React, {useState} from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Logo from '../navigation_bar/logo'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"
import { login } from "../../actions/session_actions"


const LogInForm = ({errors, login}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [currentField, setCurrentField] = useState('email')
    // const [errorList, setErrorList] = useState(errors)

    const handleSubmit = (e) => {
        if(e) e.preventDefault();
        if(currentField === 'email') {
            setCurrentField('password')
        } else {
            login({email, password})
        }
    }

    const update = (e) => {
        const updatedField = e.target.value
        const setFunction = currentField === 'email' ? setEmail : setPassword
        setFunction(updatedField)
    }

    const demoUserLogin = () => {
        let finalInputValue;
        let setFunction;
        let inputCurrentValue = '';
        if (currentField === 'email') {
            finalInputValue = 'Demo_User@email.com'
            setFunction = setEmail; 
        }
        else {
            finalInputValue = 'password'
            setFunction = setPassword
        }
        let count  = 0
        let inputInterval = setInterval(() => {
                                if(count === finalInputValue.length - 1) {
                                    clearInterval(inputInterval)
                                }
                                inputCurrentValue += finalInputValue[count]
                                setFunction(inputCurrentValue)
                                count++
                                }, 150 )

    }

    useEffect( () => {
        if (email === 'Demo_User@email.com') {
            if ( currentField === 'email') {
                handleSubmit()
            } else {
                if(password === '') {
                    demoUserLogin()
                } else if (password === 'password') {
                    handleSubmit();
                }
            }
        } 
    })

    return (
        <div className="session-form-page">
            <div className="session-form-container">
                {/* <h1 className="logo">RainForest</h1> */}
                <Logo />
                <form onSubmit={(e) =>handleSubmit(e)} className="session-form">
                    <h1 className="session-form-header">Sign-In</h1>
                    {errors.map(error=> {
                        return <p>{error}</p>
                    })}
                    <label>{currentField === 'email' ?'Email or mobile number' : 'Password' }
                        <input
                            type={currentField === 'email' ? 'text' : 'password'}
                            value={currentField === 'email' ? email : password}
                            onChange={update}
                            autoFocus
                        />
                    </label>
                    <button className='continue-button'>Continue</button>
                    <button type="button" onClick={demoUserLogin} className='continue-button'>Log in as Demo User</button>
                </form>
                
                <div className="login-footer">

                    <div className='create-account-button-container'>
                        <p>New to RainForest?</p>
                        <Link to='/signup' className='create-account-button'>Create your RainForest account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

//////  CONTAINER //////////

const mapStateToProps = (state, ownProps) => {
    return {
        errors: Object.values(state.errors.session),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        login: (user) =>  dispatch(login(user))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInForm))
