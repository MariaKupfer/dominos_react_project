import React from 'react';
import './Navbar.css'
import logo from './img/DominosLogo.png'
import flag from './img/flag_gb.webp'
import account from './img/free_icon_1.svg'

const Navbar = () => {
    return (
        <>
        <header className="main-header">
        <div className="language">
            <p><img src={flag} alt="eng"/> English</p>
        </div>
            <nav className="navbar">
            <div className="menu-toggle" id="mobile-menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className="nav-menu">
                <li><a href="#"><div><label className="logo-font"> <img src={logo} className="logo" width="40" height="41"/> Domino's</label></div></a></li>
                <li><a href="https://www.dominos.de/speisekarte">MENÜ</a></li>
                <li><a href="https://www.dominos.de/gutscheine-coupons">GUTSCHEINE &<br/> COUPONSt</a></li>
                <li><a href="https://www.dominos.de/store">STORES</a></li>
                <li><a href="https://www.dominos.de/club">CLUB</a></li>
                <li><a href="https://www.dominos.de/ueber-dominos">ÜBER UNS</a></li>
                <li><a href="https://www.dominos.de/jobs">JOBS</a></li>
                <li><a href="https://www.dominos.de/franchisepartner">FRANCHISE</a></li>
                <li><a href="https://bestellen.dominos.de/login"><img src={account} alt="person" className="person" width="20" height="20"/>ANMELDEN</a></li>
            </ul>
            </nav>
            </header>
        </>
    );
};

export default Navbar;