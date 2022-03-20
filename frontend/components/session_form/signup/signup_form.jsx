import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SignUpForm = ({formType, errors, processForm}) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')


   const handleSubmit = (e) => {
        e.preventDefault()
        processForm({username, email, password})
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


    return(
        <div className="session-form-container">
            <h1 className="logo">RainForest</h1>
            <form onSubmit={(e) =>handleSubmit(e)} className="session-form">
                <h1>{formType}</h1>
                {errors.map(error=> {
                    <p>{error}</p>
                })}
                <label>Your Name
                    <input
                        type="text"
                        value={username}
                        onChange={update('Username')}
                    />
                </label>
                <label>Mobile Number or email
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
                <label>Re-Enter Password
                    <input
                        type='password'
                        value={passwordConfirm}
                        onChange={update('PasswordConfirm')}
                    />
                </label>
                <button className="continue-button">Continue</button>
            </form>
            <p className="text-small">By creating an account, you agree to RainForest's</p>
            <p className="text-small">Conditions of Use and Privacy Notice.</p>
            
            <p className="text-medium">Already a have an account? <Link to='/login' className=''>Sign In</Link></p>
        </div>
    )

}


export default SignUpForm