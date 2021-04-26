import React from 'react';
import './Blockchain.css'
import Comments from '../components/Comments';

function Blockchain() {
    return (
      <div className="Blockchain">
        <h2>Garrick's Thoughts on Blockchain</h2>
        <p>Blockchain is an interesting technology with huge possibilities for future implementations.
        Data privacy is becoming more important to users as they realize that they are being
        used by big technology companies who sell their data without reimbursement, or in some cases permission. 
        I have an idea for a new cryptocurrency that works based on time. Every minute the value of your coin will 
        increase, and you can make deals with other people to trade value in exchange for virtual items. Eventually,
        the service may move to real items. Cryptocurrencies all use blockchain technology to verify and track transactions,
        and I will also using it to implement my system. Bitcoin is a great idea, however in order to create a real new system,
        you have to make the previous system obselete, and so long as bitcoin keeps being exchanged for dollars instead of
        being used for trade in a market it will never be an actual currency. Right now it is used as a store of value 
        because of the state of the financial system, but with my idea, I can fix some of the inequalities and issues
        with the current system.  
        </p>
        <h3>Leave YOUR Thoughts Down Below</h3>
        <Comments></Comments>
      </div>
    );
}

export default Blockchain;