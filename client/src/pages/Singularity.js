import React from 'react';
import './Singularity.css'
import Comments from '../components/Comments';

function Singularity() {
    return (
      <div className="Singularity">
        <h2>Garrick's Thoughts on the Technoological Singularity</h2>
        The technological singularity is a possible future event where humans become fully
        merged with technology. This in some people's eyes is the next stage for human evolution.
        I am not sure about the future but it is an interesting idea. In my opinion the future looks
        a lot more like A Brave New World by Aldous Huxley. Eveyone is happy but they don't realize that they 
        are being manipulated by higher powers, and if they do they don't really mind because they are happy.
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default Singularity;