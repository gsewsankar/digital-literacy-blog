import React from 'react';
import './Turing.css'
import Comments from '../components/Comments';

function Turing() {
    return (
      <div className="Turing">
        <h2>Garrick's Thoughts on the Turing Test</h2>
        <p>The turing test and the chinese room are meant to speculate when we know that technology is sufficiently
          intelligent. I don't want to resummarize them here, but I will tell my thoughts about the future. Humans will
          be able to speak with artificially intelligent programs and not tell the difference whether or not it is a
          real human responding to them. Eventually, all call centers, will close down and AI will take over those jobs.
          Some people will fall in love with robots, and other people will become robots. The future will be a crazy place, but
          isn't it great. 
        </p>
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default Turing;