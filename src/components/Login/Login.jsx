import './Login.css'
import React from 'react';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context provider/AuthProvider';


const Login = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || "/";

    const handleLogIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        setError('')
        if (password.length < 6) {
            setError('Password Must be 6 Character ')
            return
        }

        loginUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    }
    return (
        <div className='form-container'>
            <h4 className='form-title'>Please Login</h4>
            <form onSubmit={handleLogIn}>
                <div className='form-control'>
                    <label htmlFor="">email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type={show ? "text" : "password"} name="password" id="password" required />
                    <p onClick={() => setShow(!show)}><small>
                        {
                            show ? <span>Hide Password</span> : <span>Show Password</span>
                        }
                    </small></p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to='/signUp'><span>Create New Account</span></Link></small></p>
        </div>
    );
};

export default Login;