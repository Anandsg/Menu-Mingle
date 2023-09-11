import React, { useEffect, useState } from "react"
import './Header.css';
import { LOGO_URL } from '../../utils/constants';

const Header = () => {

    const [btnChange, setBtnChange] = useState('Login')
    console.log('Header rendered')

    // if No dependency array - [] => useEffect will be called everytime when component render
    // if there is dependency with empty array - [] => useEffect will be called initial render (just once)
    // if there is dependecy with value in it [btnChange] => useEffect will be called everytime 
    // when btnChange updated

    useEffect(() => {
        console.log('Header useEffect');
    }, [btnChange])

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL}
                    className="logo" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnChange === 'Login' ?
                            setBtnChange('Logout') :
                            setBtnChange('Login')
                    }}>{btnChange}</button>
                </ul>

            </div>
        </div>
    )
}

export default Header;