import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login")
    const toggleLogin = () => {
        setShowLogin(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => toggleLogin()} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login"
                        ? <></> :
                        <input type="text" placeholder='Your name' required />}

                    <input type="email" placeholder='Your email' required />
                    <input type="password" placeholder='Password' required />
                </div>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <span>By signing up, you agree to our Terms of Service and Privacy Policy.</span>
                </div>
                <button>{currState === "Login" ? "Login" : "Create account"}</button>
                {currState === "Login"
                    ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}

            </form>
        </div>
    )
}

export default LoginPopup