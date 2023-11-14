import React from 'react'
import './OfferCard.css'

const OfferCard = ({ title, content, validity, buttonText }) => {
    return (
      <div className="offer-card">
        <h2>{title}</h2>
        <p>{content}</p>
        <h5>{validity}</h5>
        <button className="small-red-button">{buttonText}</button>
      </div>
    );
  };

  export default OfferCard;