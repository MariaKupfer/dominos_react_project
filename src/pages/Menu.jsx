import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <>
        <h1>This is Menu page</h1>
        <button className="small-red-button"><Link to="/">Back</Link></button>
        </>
    );
};

export default Menu;