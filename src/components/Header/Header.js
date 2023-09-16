import React, { useState } from "react"
import './Header.css';
import { LOGO_URL } from '../../utils/constants';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const [isLoggedin, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();
    console.log('Header rendered')

    // if No dependency array - [] => useEffect will be called everytime when component render
    // if there is dependency with empty array - [] => useEffect will be called initial render (just once)
    // if there is dependecy with value in it [btnChange] => useEffect will be called everytime 
    // when btnChange updated

    // useEffect(() => {
    //     console.log('Header useEffect');
    // }, [btnChange])

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}
                    className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact Us</li>
                    </Link>
                    <Link to='/cart'>
                        <li>Cart</li>
                    </Link>
                    {/* <button className="login-btn" onClick={() => {
                        btnChange === 'Login' ?
                            setBtnChange('Logout') :
                            setBtnChange('Login')
                    }}>{btnChange}</button> */}
                    {isLoggedin ? (
                        <button className="ogout-btn"
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </button>
                    ) : (
                        <button className="login-btn" onClick={() => navigate('/login')}>
                            Login
                        </button>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header;