import React from 'react';
import './NavBar.css'
import Rotate from 'react-reveal/Rotate';

function NavBar() {
  return (
    <Rotate top right>
    <div className="NavBar">
        <a href='#header'>Top</a>
        <a href='#section1'>AI Conciousness</a>
        <a href='#section2'>Turing Test</a>
        <a href='#section3'>Tech-Singularity</a>
        <a href='#section4'>AI Philosophy</a>
        <a href='#section5'>Financial System</a>
        <a href='#section6'>TimeCoin</a>
        <a href='#section7'>VR Art</a>
        <a href='#footer'>Bottom</a>
    </div>
    </Rotate>
  );
}

export default NavBar;