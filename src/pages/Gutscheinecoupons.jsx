import React from 'react';
import {Link} from 'react-router-dom';

const Gutscheinecoupons = () => {
    return (
        <>
        <h1>This is Gutscheine page</h1>
        <button className="small-red-button"><Link to="/">Back</Link></button>
        </>
    );
};

export default Gutscheinecoupons;