import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import Logo from "../../assets/Logo.svg";
import "./Nav.css";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Function to toggle menu class
        function toggleMenu() {
            setIsMenuOpen(prevState => !prevState);
        }

        const hamburgerMenuClickHandler = () => {
            toggleMenu();
            // Run the function to check the aria-expanded value
            ariaExpanded();
        };

        const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
        hamburgerMenu.addEventListener('click', hamburgerMenuClickHandler);

        return () => {
            hamburgerMenu.removeEventListener('click', hamburgerMenuClickHandler);
        };
    }, []); // Empty dependency array means this effect runs only once, like componentDidMount

    useEffect(() => {
        const body = document.querySelector('body');
        const navbarMenu = document.querySelector('#cs-navigation');
        const hamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
        const csUL = document.querySelector('#cs-expanded');

        if (isMenuOpen) {
            body.classList.add('cs-open');
            navbarMenu.classList.add('cs-active');
            hamburgerMenu.classList.add('cs-active');
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            body.classList.remove('cs-open');
            navbarMenu.classList.remove('cs-active');
            hamburgerMenu.classList.remove('cs-active');
            csUL.setAttribute('aria-expanded', 'false');
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
                item.classList.toggle('cs-active');
            };
            item.addEventListener('click', onClick);
            return () => {
                item.removeEventListener('click', onClick);
            };
        }
    }, []); // Empty dependency array means this effect runs only once, like componentDidMount

    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');
        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

    return (
        <header id="cs-navigation">
            <div className="cs-container">
                {/*Nav Logo*/}
                <Link to="/" className="cs-logo" aria-label="back to home"> {/* Use Link instead of anchor tag */}
                    <img
                        src={Logo}
                        alt="logo"
                        width={210}
                        height={29}
                        aria-hidden="true"
                        decoding="async"
                    />
                </Link>
                {/*Navigation List*/}
                <nav className="cs-nav" role="navigation">
                    {/*Mobile Nav Toggle*/}
                    <button className="cs-toggle" aria-label="mobile menu toggle">
                        <div className="cs-box" aria-hidden="true">
                            <span className="cs-line cs-line1" aria-hidden="true" />
                            <span className="cs-line cs-line2" aria-hidden="true" />
                            <span className="cs-line cs-line3" aria-hidden="true" />
                        </div>
                    </button>
                    <div className="cs-ul-wrapper">
                        <ul id="cs-expanded" className="cs-ul" aria-expanded="false">
                            <li className="cs-li">
                                <Link to="/" className="cs-li-link" aria-label="On Click"> 
                                    Home
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link to="/about" className="cs-li-link" aria-label="On Click"> 
                                    About
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link to="/menu" className="cs-li-link" aria-label="On Click"> 
                                    Menu
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link to="/booking" className="cs-li-link" aria-label="On Click"> 
                                    Reservations
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link to="/order-online" className="cs-li-link" aria-label="On Click"> 
                                    Order Online
                                </Link>
                            </li>
                            <li className="cs-li">
                                <Link to="/login" className="cs-li-link" aria-label="On Click"> 
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Nav;