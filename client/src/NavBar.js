import React from 'react';
import './NavBar.css'
import Rotate from 'react-reveal/Rotate';

function NavBar() {
  return (
    <Rotate top right>
    <div className="NavBar">
        <a href='#header'>Top</a>
        <a href='#section1'>Section 1</a>
        <a href='#section2'>Section 2</a>
        <a href='#section3'>Section 3</a>
        <a href='#section4'>Section 4</a>
        <a href='#section5'>Section 5</a>
        <a href='#section6'>Section 6</a>
        <a href='#section7'>Section 7</a>
        <a href='#footer'>Bottom</a>
    </div>
    </Rotate>
  );
}

export default NavBar;