import { React, useContext, useState } from 'react';
import './Hrader.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [error, setError] = useState('');
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
                setError(error.message);
                // An error happened.
            });
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signUp">SignUp</Link>
                {user && <span className='text-color'> Welcome {user.email}<button onClick={handleLogOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;