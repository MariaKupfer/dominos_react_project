import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/DominosLogo.png';
import flag from '../../assets/images/flag_gb.webp';
import account from '../../assets/images/free_icon_1.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="main-header">
            <div className="language">
                <p>
                    <img src={flag} alt="eng" /> English
                </p>
            </div>
            <nav className="navbar">
                <div className="menu-toggle" id="mobile-menu" onClick={handleToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-menu ${menuOpen ? 'show' : ''}`}>
                    <li>
                        <Link to="/">
                            <a href="#">
                                <div>
                                    <label className="logo-font">
                                        {' '}
                                        <img src={logo} className="logo" width="40" height="41" /> Domino's
                                    </label>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="menu">
                            {' '}
                            <a href="https://www.dominos.de/speisekarte">MENÜ</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="gutscheinecoupons">
                            <a href="https://www.dominos.de/gutscheine-coupons">
                                GUTSCHEINE &<br /> COUPONSt
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link to="store">
                            <a href="https://www.dominos.de/store">STORES</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="club">
                            <a href="https://www.dominos.de/club">CLUB</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="about">
                            <a href="https://www.dominos.de/ueber-dominos">ÜBER UNS</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="jobs">
                            <a href="https://www.dominos.de/jobs">JOBS</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="franchisepartner">
                            <a href="https://www.dominos.de/franchisepartner">FRANCHISE</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="login">
                            <a href="https://bestellen.dominos.de/login">
                                <img src={account} alt="person" className="person" width="20" height="20" />
                                ANMELDEN
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
