import React from 'react';
import {
    Link
  } from 'react-router-dom';

const About = () => {
    return (
        <>
        <h1>This is About page</h1>
        <button className="small-red-button"><Link to="/">Back</Link></button>
        </>
    );
};

export default About;