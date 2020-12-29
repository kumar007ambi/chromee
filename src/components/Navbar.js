import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src='/images/logo1.png' style={{ width: 100, marginTop: -7 }} alt="Oops" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                PRODUCTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu} >
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu} >
                                CONTACT
                           </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;