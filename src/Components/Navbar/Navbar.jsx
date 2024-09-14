import React, { useContext, useState } from 'react'
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("Home");
    const toggleLogin = () => {
        setShowLogin(true);
        document.body.style.overflow = 'hidden';  // Disable scrolling
    };
    const { getTotalCartAmount } = useContext(StoreContext)
    const [searchVisible, setSearchVisible] = useState(false);

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    }
    return (
        <div className='navbar'>
            {searchVisible ?
                <>
                    <div className="search-bar">
                        <input type="text" placeholder='Search here...' />
                    </div>
                </>
                : <></>}
            <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>
            <ul className="navbar-menu">
                <li><Link to='/' onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link></li>
                <li><a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a></li>
                <li><a href='#app-download' onClick={() => setMenu("Mobile-App")} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a></li>
                <li><a href='#footer' onClick={() => setMenu("Contact us")} className={menu === "Contact us" ? "active" : ""}>Contact us</a></li>
            </ul>
            <div className="navbar-right">
                <img className='navbar-search-icon' src={assets.search_icon} alt='' onClick={toggleSearch} />
                <div className="navbar-cart-icon">
                    <Link to='/cart'><img className='cart-icon' src={assets.basket_icon} alt='' /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div >
                <button onClick={() => { toggleLogin() }}>Sign In</button>
            </div >
        </div >
    )
}

export default Navbar