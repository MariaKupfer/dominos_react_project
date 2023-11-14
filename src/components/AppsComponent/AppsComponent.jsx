import React from 'react';
import './AppsComponent.css'
import appleIcon from './img/download_on_the_app_store_badge_de_wht_092917.webp'
import googleIcon from './img/google-play-badge_negative.webp'
import phone from './img/dominos-app2.webp' 


const AppsComponent = () => {
    return (
        <>
            <div className="row" id="app">
            <div className="col-1">
                <img src={phone} className="phone-image" width="200" height="405"/>
            </div>
            <div className="col-2">
                <h1>Hunger? Keine <br/> Lust zu kochen?</h1>
                <h1>Mit der Domino's App schnell und <br/>lecker Pizza & mehr bestellen und<br/> 10% sparen!</h1>
                <p> Weitere Infos zur App findest du <a href="https://www.dominos.de/app">hier</a>. <br/> <b>Lad dir die Domino's App für iPhone oder Android</b></p>
                <div className="apps-icons">
                    <img src={appleIcon} className="app-download"  width="135.38"/>
                    <img src={googleIcon}  width="155.38"/>
                </div>
            </div>
        </div>

        <div className="subscribe">
            <h3>TOP DEALS UND DIE NEUSTEN DOMINO'S NEWS!</h3>
            <p>
                Jetzt den Domino's Newsletter abonnieren und 20% Rabatt auf Pizza erhalten! 
            </p>
            <input className="input-email-form" type="email" id="email" placeholder="E-Mail-Adresse"/>
            <button className="big-blue-button-register-now" id="register-now"> Anmelden &#11208</button>
        </div>
        </>
    );
};

export default AppsComponent;