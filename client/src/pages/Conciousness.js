import React from 'react';
import './Conciousness.css';
import Comments from '../components/Comments';


function Conciousness() {
    
    return (
      <div className="Conciousness">
        <h2>Garrick's Thoughts on Artificially Intelligent Conciousness</h2>
        <p>I think that conciousness is beyond technological innovations. The question
          of whether or not we can create machines that are truly concious is to me the wrong question. Machines
          can be self aware, but I am not sure that, that would be the same thing as being concious. My definition is based on 
          ancient indian texts, and I will update this post and write it with details later. Essentially, there is wakefulness,
          then there is the dream state, then there is black dream state, and after that is full conciousness. In order to get
          to the concious state you have to do yoga, a special drug, or die then you'll reach self-realzation, or moksha.
        </p>
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default Conciousness;