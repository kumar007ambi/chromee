import React from 'react';
import './Footer.css';
/* import { Button } from './Button'; */
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img src='/images/logo1.png' style={{ width: 350 }} alt="Oops" />
                        </Link>
                    </div>
                    <small class='website-rights'> Copyright © 2020 All rights reserved.</small>
                    <div class='social-icons'>
                        <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook' >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link class='social-icon-link instagram' to='/' target='https://www.instagram.com/chrommelights/' aria-label='Instagram' >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link class='social-icon-link envelope' to='/' target='chrommelights@gmail.com' aria-label='Gmail' >
                            <i class='far fa-envelope' />
                        </Link>
                        <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'  >
                            <i class='fab fa-twitter' />
                        </Link>
                    </div>
                </div>
                <hr></hr>
                <div className="para">
                    <p>Site is Created By A5D STDIOS.</p>
                </div>
            </section>
        </div>
    );
}

export default Footer;