import React from 'react';
import './ImageOfferCard.css'


const ImageOfferCard = ({image, title, buttonText }) => {

    return (
      <div className="image-offer-card">
        <img src={image} alt="eng" className="offerImage" width="300" height="300"/>
        <p>{title}</p>
        <button className="big-red-button">{buttonText}</button>
      </div>
    );
  };

export default ImageOfferCard;