import React from 'react';
import './RedAndBlueBoxes.css'
import bike from '../../assets/images/bike.svg'
import shop from '../../assets/images/shop.svg'

const RedAndBlueBoxes = () => {
    return (
        <>
        <div className="delivery-and-pickup">
            <div className="delivery">
                <a href="https://bestellen.dominos.de/delivery-address-list">
                    <h2>Lieferung</h2>
                    <br/>
                        <img src={bike} alt="icon-delivery" width="55" height="55"/>
                    <br/>
                    <br/>
                    <div className="start-order-footer">
                        <div className="arrow-box"><p><b>{'\u279D'}</b></p></div>
                    </div>
                </a>
            </div>

            <div className="pickup">
                <a href="https://bestellen.dominos.de/store-search">
                    <h2>Abholung</h2>
                    <br/>
                        <img src={shop} alt="icon-delivery" width="55" height="55"/>
                    <br/>
                    <br/>
                    <div className="start-order-footer" id="pickup-footer">
                        <div className="arrow-box" id="pickup">
                            <p><b>{'\u279D'}</b></p>
                        </div>
                     </div>
                 </a>
            </div>
        </div>
        </>
    );
};

export default RedAndBlueBoxes;