import React from 'react';
import './Animation.css'
import firstImage from '../../assets/images/230824_website_desktopslider_20prozent_abholung_1500x500-1.webp'
import secondImage from '../../assets/images/web-app_megawoche_publicwebsite_desktopslider_1500x500.webp'

const Animation = () => {
    return (
        <>
        <div className="slider-container">
            <div className="slider">
                <img src={firstImage}/>
                <img src={secondImage} alt="baner"/>
            </div>
        </div> 
        </>
    );
};

export default Animation;