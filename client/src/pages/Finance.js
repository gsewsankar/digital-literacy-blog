import React from 'react';
import './Finance.css';
import Comments from '../components/Comments';

function Finance() {
    return (
      <div className="Finance">
        <h2>Garrick's Thoughts on the US Financial System</h2>
        <p>The financial system is unbalanced, when there is too much inequality systems collapse like in the
          French revolution. When there is too much equality systems collapse like in Soviet Uniion or China under Mao.
          The United States for many years has kept a happy middle, but we are moving towards greater inequality as the
          stock market is continuously pumped with printed money, and poor people cannot participate because they are 
          not educated about it, or they are up to their knees in debt. The system as it is right now could collapse, but
          the FED keeps kicking the can down the road. On the othe hand the United States could eventually pay off all debts and
          stop printing money endlessly, there will be no inflation, and everyone will live happily ever after. The dollar could fail 
          if people realize the huge ponzi scheme going on and move to digital financial freedom, or decentralized de-fi.  
        </p>
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default Finance;