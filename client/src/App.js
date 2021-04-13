import React from 'react';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import NavBar from './components/NavBar';
import eye from './eye.png';

function App() {
  
  return (
    <div>
    <NavBar></NavBar>
    <div className="App" id="content">
      <div className="Header" id='header'>
        <Zoom>
        <h1>Garrick's Thought Provoking Website</h1>
        <img src={eye} alt="eye" />
        </Zoom>
      </div>
      
      <div className="Section1" id='section1'>
        <Zoom>
          <div className="row">
          <h1>Artificialy Intelligent Conciousness</h1>
          <p>What is the Philosophy of Conciousness?</p>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/rHKwIYsPXLg" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
          </div>
          <div>
            <p>John Searle discusses his famous Chinese room argument which holds that a digital computer executing a program cannot be shown to have a 
              "mind", "understanding" or "consciousness", regardless of how intelligently or human-like the program may 
              make the computer behave.
              </p>
          </div>
        </Zoom>
      </div>

      <div className="Section2" id='section2'>
        <Zoom>
          <h1>Turing Test</h1>
          <p>The Turing Test is a method of inquiry in artificial intelligence (AI) 
            for determining whether or not a computer is capable of thinking like a human being. 
            The test is named after Alan Turing, the founder of the Turing Test and an English computer scientist, 
            cryptanalyst, mathematician and theoretical biologist.
            </p>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/3wLqsRLvV-c" 
            title="YouTube video player2" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
          </Zoom>
      </div>

      <div className="Section3" id='section3'>
        <Zoom>
        <h1>The Technological Singularity</h1>
          <p>The technological singularity—also, simply, the singularity—is a 
            hypothetical point in time at which technological growth becomes 
            uncontrollable and irreversible, resulting in unforeseeable changes to 
            human civilization.
            </p>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/ye5C-zlCAyM" 
        title="YouTube video player3" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
        </iframe>
        </Zoom>
      </div>
      
      <div className="Section4" id='section4'>
        <Zoom>
        <h1>Philosophy of Artificial Intelligence</h1>
          <p>The philosophy of artificial intelligence attempts to answer such questions as follows:
            <li>Can a machine act intelligently? Can it solve any problem that a person would solve by thinking?</li>
            <li>Are human intelligence and machine intelligence the same? Is the human brain essentially a computer?</li>
            <li>Can a machine have a mind, mental states, and consciousness in the same sense that a human being can? Can it feel how things are?</li>
            </p>
            <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/39EdqUbj92U" 
            title="YouTube video player4" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
            </iframe>
          </Zoom>
      </div>

      <div className="Section5" id='section5'>
        <Zoom>
          <h1>Financial System</h1>
          <p>The lesson of history is that you do not get a sustained economic recovery as long as the financial system is in crisis.</p>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/bgPDW0ZpgJU" 
          title="YouTube video player5" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
          
        </Zoom>
      </div>
      
      <div className="Section6" id='section6'>
        <Zoom>
        <h1>Cryptocurrencies and Blockchain Technology</h1>
          <p>A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions. Much of the interest in these unregulated currencies is to trade for profit, with speculators at times driving prices skyward.</p>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/SSo_EIwHSd4" 
          title="YouTube video player6" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
          </Zoom>
      </div>

      <div className="Section7" id="section7">
        <Zoom>
        <h1>Digital Art and NFTs</h1>
          <p>A non-fungible token (NFT) is a unit of data on a digital ledger called a blockchain, where each NFT can represent a unique digital item, and thus they are not interchangeable. NFTs can represent digital files such as art, audio, videos, items in video games and other forms of creative work.</p>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/zpROwouRo_M" 
          title="YouTube video player7" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
          </Zoom>
      </div>
      
      <div className="Footer" id='footer'>
        <Zoom><p>&#169; 2021 A Garrick Website. All rights reserved.</p></Zoom>
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
