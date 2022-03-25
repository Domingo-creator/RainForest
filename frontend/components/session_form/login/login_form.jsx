import React, {useState} from 'react'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

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
        <div className="session-form-container">
            <h1 className="logo">RainForest</h1>
            <form onSubmit={(e) =>handleSubmit(e)} className="session-form">
                <h1>Sign-In</h1>
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
            </form>
            <div className="login-footer">
                <button onClick={demoUserLogin} className='account-button'>Log in as Demo User</button>
                <div className='create-account-button-container'>
                    <p>New to RainForest?</p>
                    <Link to='/signup' className='account-button'>Create your RainForest account</Link>
                </div>
                {/* <Button component={Link} to='/signup'>Create your Rainforest account</Button> */}
            </div>
        </div>
    )
}
export default LogInForm;