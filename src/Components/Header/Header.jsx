import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                <h2>Taste the best!<br /><span> Place your order now!</span></h2>
                <p>Explore our diverse menu, where you'll find a delicious selection of dishes made with the best ingredients and lots of love! </p>
                <button onClick={() => document.getElementById('explore-menu').scrollIntoView({ behavior: 'smooth' })}>
                    View Menu
                </button>

            </div>
        </div>
    )
}

export default Header