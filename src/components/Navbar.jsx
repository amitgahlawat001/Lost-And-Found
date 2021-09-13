import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button,setButton] =  useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu =() => setClick(false);

    useEffect(() => {
        showButton();
      }, []);

    const showButton = () => {
        if(window.innerWidth<= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        Lost & Found <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='./pages/Services' className='nav-link' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li> 
                        <li className='nav-item'>
                            <Link to='/SignUp' className='nav-link-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li> 
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
