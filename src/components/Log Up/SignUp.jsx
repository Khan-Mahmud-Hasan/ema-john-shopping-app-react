import { Link } from 'react-router-dom';
import './SignUp.css'
import { React, useContext, useState } from 'react';
import { AuthContext } from '../../context provider/AuthProvider';

const signUp = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        setError('')
        if (password !== confirm) {
            setError('Password Not Match')
            return
        }
        else if (password.length < 6) {
            setError('Password Must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }
    return (
        <div className='form-container'>
            <h4 className='form-title'>SignUp Here!</h4>
            <form onSubmit={handleSignUp} >
                <div className='form-control'>
                    <label htmlFor="">email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p><small>Already have an account? <Link to='/login'> <span>Login</span> </Link></small></p>
            {/* display  error*/}
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default signUp;