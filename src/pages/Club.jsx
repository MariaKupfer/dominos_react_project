import React from 'react';
import {Link} from 'react-router-dom';

const Club = () => {
    return (
        <>
        <h1>This is Club page</h1>
        <button className="small-red-button"><Link to="/">Back</Link></button>
        </>
    );
};

export default Club;