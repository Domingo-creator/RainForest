import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const LogInForm = ({formType, errors, processForm}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
   const handleSubmit = (e) => {
        e.preventDefault()
        processForm({email, password})
    }

    const update = (field) => {
        return (e) => {
            const updatedField = e.target.value
            switch(field) {
                case 'Email':
                    setEmail(updatedField);
                    break;
                case 'Password':
                    setPassword(updatedField);
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <div className="session-form-container">
            <h1 className="logo">RainForest</h1>
            <form onSubmit={(e) =>handleSubmit(e)} className="session-form">
                <h1>{formType}</h1>
                {errors.map(error=> {
                    <p>{error}</p>
                })}
                <label>Email or or mobile number
                    <input
                        type='text'
                        value={email}
                        onChange={update('Email')}
                    />
                </label>
                <label>Password
                    <input
                        type='password'
                        value={password}
                        onChange={update('Password')}
                    />
                </label>
                <button className='continue-button'>Continue</button>
            </form>
            <div className="login-footer">
                <p>New to RainForest?</p>
                <Link to='/signup'>Sign Up</Link>
            </div>

        </div>
    )
}
export default LogInForm;