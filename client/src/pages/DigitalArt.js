import React from 'react';
import './DigitalArt.css';
import Comments from '../components/Comments';

function DigitalArt() {
    return (
      <div className="DigitalArt">
        <h2>Garrick's Thoughts on Digital Art</h2>
        <p>A huge market has opened with some things called nonfungible tokens. Essentially,
          these are virtual art peices that get sold over the internet. I imagine in a future where 
          virtual reality is better, people will create virtual reality experiences that take
          you to another amazing place. Like in the movie avatar with the blue people. Digital
          art will be super valuable in a digital future.
        </p>
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default DigitalArt;