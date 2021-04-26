import React from 'react';
import './Philosophy.css';
import Comments from '../components/Comments';

function Philosophy() {
    return (
      <div className="Philosophy">
        <h2>Garrick's Thoughts on AI Philosophy</h2>
        <p>Artificial Intelligence is a powerful technology that is already being used today.
          The technology can become dangerous very quickly under the right circumstances. Many
          believe that we are long away from when the machines will begin to surpass human intelligence,
          but it is possible. Popular fiction like the matrix, and terminator suggest a possible dark future.
          I will continue to watch closely as this technology continues to develop because there are really great things
          that it can do as well.
        </p>
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default Philosophy;