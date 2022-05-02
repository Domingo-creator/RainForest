import React, {useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../navigation_bar/logo'
import { connect } from "react-redux"
import { login, signup } from "../../actions/session_actions"
import {GoTriangleRight} from "react-icons/go"

const SignUpForm = ({errors, signup, login}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [formErrors, setFormErrors] = useState({email:'', 
                                                  username: '',
                                                  password: '',
                                                  passwordConfirm:'',
                                                  errorsShown: false,
                                                })

   const handleSubmit = (e) => {
        e.preventDefault()
        if (checkValidSubmitInputs()) {
            signup({username, email, password})
        } 
    }

    const checkValidSubmitInputs = () => {  
        let validInputs = true
        let newErrorState = {email:'', username: '', password: '', passwordConfirm:'', errorsShown: false}
        if(!checkValidEmail(newErrorState)) validInputs= false;
        if(!checkValidPassword(newErrorState)) validInputs = false;
        if(!checkValidUsername(newErrorState)) validInputs = false;
        if (validInputs === false) {
            newErrorState.errorsShown = true;
            setFormErrors(newErrorState)
        }
        return validInputs;   
    }

    const checkValidUsername = (newErrorState) => {
        let validInput = true;
        newErrorState.username = ""
        if(username === '') {
            newErrorState.username = "! Enter your name"
            validInput = false;
        }
        return validInput;
    }

    const checkValidEmail = (newErrorState) => {
        let validInput = true;
        newErrorState.email = ""

        if(email === '') {
            newErrorState.email = "! Enter your email"
            validInput = false;
        }
        return validInput;
    } 
    
    const checkValidPassword = (newErrorState) => {
        newErrorState.password = ""
        newErrorState.passwordConfirm = ""
        
        let validInputs = true;
        if( password !== passwordConfirm) {
            newErrorState.passwordConfirm = '! Passwords must match'
            validInputs = false;
        } 
        if( password.length < 6) {
            newErrorState.password = '! Minimum 6 charaters required'
            validInputs = false;
        }
        return validInputs;
    }

    const update = (field) => {
        return (e) => {
            const updatedField = e.target.value
            // const functionName = `set${field}`
            // var fn = window[functionName]
            // if(typeof fn === "function") fn.apply(null, updatedField)
            switch(field) {
                case 'Email':
                    setEmail(updatedField);
                    break;
                case 'Username':
                    setUsername(updatedField);
                    break;
                case 'Password':
                    setPassword(updatedField);
                    break;
                case 'PasswordConfirm':
                    setPasswordConfirm(updatedField);
                    break;
                default:
                    break;
            }
        }
    }

    const demoUserLogin = () => {
        let demoInfo = {
            username: {input: 'Sir_Demo_of_Demoville', setter: setUsername},
            email: {input: "Demo_User@email.com", setter: setEmail},
            password: {input: 'password', setter: setPassword},
            passwordConfirm: {input: 'password', setter: setPasswordConfirm}
        }

        let fieldIndex = 0;
        let indexCount = 0;
        let currentInput = ''
        let currentField = Object.values(demoInfo)[fieldIndex] 

        let inputInterval = setInterval( () => {
            currentInput += currentField.input[indexCount]
            currentField.setter(currentInput);
            indexCount++
            if( currentInput === currentField.input) {
                if(fieldIndex === 3) {
                    clearInterval(inputInterval)
                } else{
                    currentInput = '';
                    indexCount = 0;
                    fieldIndex++;
                    currentField = Object.values(demoInfo)[fieldIndex]
                }
            }         
        },50)
    }

    useEffect( () =>  {
        if (username === 'Sir_Demo_of_Demoville' && email === 'Demo_User@email.com'
            && password === 'password' && passwordConfirm === 'password') {
                login({email: 'Demo_User@email.com', password: 'password'})
        }
       
    })  

    useEffect( () => {
        if(formErrors.errorsShown) {
            checkValidSubmitInputs()
        }
    }, [username, email, password, passwordConfirm] )

    

    return(
        <div className="session-form-page">

            <div className="session-form-container">
                {/* <h1 className="logo">RainForest</h1> */}
                <Logo/>
                <form onSubmit={(e) =>handleSubmit(e)} className="session-form">
                    <h1 className="session-form-header">Create Account</h1>
                    {errors.map(error=> {
                        return <p>{error}</p>
                    })}
                    <label>Your Name
                        <input
                            type="text"
                            value={username}
                            onChange={update('Username')}
                            className={ formErrors.username === '' ? '' : 'input-error-highlight' }
                            autoFocus
                        />
                        <p className='error-message'>{formErrors.username}</p>
                    </label>
                    <label>Mobile Number or email
                        <input
                            type='text'
                            value={email}
                            onChange={update('Email')}
                            className={ formErrors.email === '' ? '' : 'input-error-highlight' }

                        />
                        <p className='error-message'>{formErrors.email}</p>

                    </label>
                    <label>Password
                        <input
                            type='password'
                            value={password}
                            onChange={update('Password')}
                            className={ formErrors.password === '' ? '' : 'input-error-highlight' }
                        />
                        <p className='error-message'>{formErrors.password}</p>

                    </label>
                    <label>Re-Enter Password
                        <input
                            type='password'
                            value={passwordConfirm}
                            onChange={update('PasswordConfirm')}
                            className={ formErrors.passwordConfirm === '' ? '' : 'input-error-highlight' }
                        />
                        <p className='error-message'>{formErrors.passwordConfirm}</p>

                    </label>
                    <button className="continue-button">Continue</button>

                    <button type="button" onClick={demoUserLogin} className='continue-button'>Sign up as Demo User</button>
                    <div className="signup-form-footer">
                        <p className="text-small">By creating an account, you agree to RainForest's</p>
                        <p className="text-small">Conditions of Use and Privacy Notice.</p>
                    </div>
                    <p className="text-medium">Already a have an account? <Link to='/login' className='link'>Sign In<GoTriangleRight/></Link></p>
                </form>
            </div>
        </div>
    )

}

//////// Container //////////

const mapStateToProps = state => {
    return {
        errors: Object.values(state.errors.session),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signup: (user) =>  dispatch(signup(user)),
        login: (user) => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
