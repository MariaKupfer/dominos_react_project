import React from 'react';
import './Footer.css'
import appleIcon from '../../assets/images/download_on_the_app_store_badge_de_wht_092917.webp'
import googleIcon from '../../assets/images/google-play-badge_negative.webp'
import instagramIcon from '../../assets/images/instagram_nl.webp'
import youtubeIcon from '../../assets/images/youtube_nl.webp'
import facebookIcon from '../../assets/images/facebook_nl.png'

const Footer = () => {
    return (
        <>
        <footer>
            <dic className="container-1080px">
            <div className="lists">
                <ul className="contacts">
                    <li><a><strong>Produkte</strong></a></li>
                    <li><a>Die Pizza Basis</a></li>
                    <li><a>Unser Käse</a></li>
                    <li><a>Vegane Vielfalt&nbsp;</a></li>
                    <li><a>Feines Gemüse</a></li>
                    <li><a>Fleisch &amp; Wurst</a></li>
                    <li><a>Pflichtinformationen</a></li>
                </ul>
                <ul className="contacts">
                    <li><a><strong>Kontakt</strong></a></li>
                    <li><a>Impressum</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Newsletter</a></li>
                    <li><a>Hinweis geben</a></li>
                </ul>
                <ul className="contacts">
                    <li><a><strong>Karriere</strong></a></li>
                    <li><a>Jobs</a></li>
                    <li><a>Franchise</a></li>
                </ul>
                <ul className="contacts">
                    <li><a><strong>Über Domino's</strong></a></li>
                    <li><a>Storesuche</a></li>
                    <li><a>Kundenkonto</a></li>
                    <li><a>Presse</a></li>
                    <li><a>Domino's App</a></li>
                    <li><a>Unternehmen</a></li>
                    <li><a>Geschenkgutscheine</a></li>
                    <li><a>Nachhaltigkeit &amp; Innovation</a></li>
                    <li><a>Nutriscore</a></li>
                    <li><a>Gewinnspiele</a></li>
                </ul>
            </div>
            </dic>

        <p>ENGLISH VISITOR? CLICK HERE</p>
        <div className="container-1080px">
            <div className="socoal-media-bar">
                <div className="apps">
                    <h2> DU FINDEST UNSERE APPS UNTER </h2>
                    <div className="apps-icons">
                        <img src={appleIcon} className="app-download"  width="138.45" height="45"/>
                        <img src={googleIcon} className="app-download"  width="164.55" height="62"/>
                    </div>
                </div>
                <div className="sm">
                    <h2> DOMINO'S AUF SOCIAL MEDIA </h2>
                    <div className="sm-icons">
                        <img src={facebookIcon} className="icon-social-media"  height="40"/>
                        <img src={instagramIcon} className="icon-social-media" height="40"/>
                        <img src={youtubeIcon} className="icon-social-media"  height="40"/>
                    </div>
                </div>
                </div>
        </div>

        <div className="cookie">
            <p>DATENSCHUTZ | COOKIE EINSTELLUNGEN| WERBEEINSTELLUNGEN VERWALTEN <br/> ALLGEMEINE LIEFERBEDINGUNGEN</p>
        </div>
        <p>Copyright © Domino's Pizza Deutschland GmbH 2023</p>
    </footer>
    </>
    );
};

export default Footer;