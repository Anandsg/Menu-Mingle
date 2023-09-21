import React, { useState } from "react"
// import './Header.css';
import { LOGO_URL } from '../../utils/constants';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {


    const [isLoggedin, setIsLoggedIn] = useState(true);
    const navigate = useNavigate();

    const onlineStatus = useOnlineStatus();
    // console.log('Header rendered')

    // if No dependency array - [] => useEffect will be called everytime when component render
    // if there is dependency with empty array - [] => useEffect will be called initial render (just once)
    // if there is dependecy with value in it [btnChange] => useEffect will be called everytime 
    // when btnChange updated

    // useEffect(() => {
    //     console.log('Header useEffect');
    // }, [btnChange])

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img src={LOGO_URL}
                    className="w-32 p-5" alt="logo" />
            </div>
            <div className="flex items-center m-3">
                <ul className="flex">
                    <li className="px-5">
                        {onlineStatus === true ? "user online: 🟢" : "user offline: ⛔️"}
                    </li>
                    <Link to='/'>
                        <li className="px-4">Home</li>
                    </Link>
                    <Link to='/about'>
                        <li className="px-4">About</li>
                    </Link>
                    <Link to='/instamart'>
                        <li className="px-4">Instamart</li>
                    </Link>
                    <Link to='/contact'>
                        <li className="px-4">Contact Us</li>
                    </Link>
                    <Link to='/cart'>
                        <li className="px-4">Cart</li>
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