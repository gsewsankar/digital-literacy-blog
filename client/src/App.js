import React from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import NavBar from './NavBar';
import eye from './eye.png';

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <div className="App">
      <div className="Header" id='header'>
        <Zoom>
        <h2>Garrick's Thought Provoking Website</h2>
        <img src={eye} alt="eye" />
        </Zoom>
      </div>
      
      <div className="Section1" id='section1'>
        <Zoom><p>Hello World</p></Zoom>
      </div>

      <div className="Section2" id='section2'>
        <Zoom><p>Hello World</p></Zoom>
      </div>

      <div className="Section3" id='section3'>
        <Zoom><p>Hello World</p></Zoom>
      </div>
      
      <div className="Section4" id='section4'>
        <Zoom><p>Hello World</p></Zoom>
      </div>

      <div className="Section5" id='section5'>
        <Zoom><p>Hello World</p></Zoom>
      </div>
      
      <div className="Section6" id='section6'>
        <Zoom><p>Hello World</p></Zoom>
      </div>

      <div className="Section7" id="section7">
        <Zoom><p>Hello World</p></Zoom>
      </div>
      
      <div className="Footer" id='footer'>
        <Zoom><p>&#169; 2021 A Garrick Website. All rights reserved.</p></Zoom>
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
