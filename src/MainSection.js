import React from 'react';
import logo from './logo.png'
import frame from './frame.png'

const MainSection = ({ selectedOption }) => {
  return (
    <div className = "main-section">
      <h3>You currently have 3 requests</h3>
      
      <div className = 'top-box'>
        <br />
      <div className = "tbar">
      <div className = "section1">
        <h3>St Judes Hospital</h3>
        <p>Sarasota, FL. 33178</p>
      </div>
      <div className = "section2">
        <h3>10 - 17</h3>
        <p>October December</p>
      </div>
      <div className = "section3">
      <h3>20 Rooms</h3>
      <p>10 Singles, 10 Doubles</p>
      </div>
    </div>

      <br />

      <div className = "bar">
      <div className = "section-1">
        <p>RECEIVED</p>
      </div>
      <div className = "section-2">
        <p>NEGOTIATING</p>
      </div>
      <div className = "section-3">
        <p>COMPLETED</p>
      </div>
    </div>
      </div>

  <br />
  <br />


      <div className = 'bottom-box'>
        <br />
      <div className = "tbar">
      <div className = "section1">
        <h3>St Judes Hospital</h3>
        <p>Sarasota, FL. 33178</p>
      </div>
      <div className = "section2">
        <h3>10 - 17</h3>
        <p>October December</p>
      </div>
      <div className = "section3">
      <h3>20 Rooms</h3>
      <p>10 Singles, 10 Doubles</p>
      </div>
    </div>

      <br />

        <div className = "bar">
        <p>COMPLETED</p>
   </div>

<br />
<br />

      
    <div className = 'cards'>
    <div class     = "row">
    <div class     = "column">
  <div class     = "card">
  <img src       = {logo} className = 'App-logo' />
  <button className='rf'>Rare Find</button>
  <div className = 'section'>
      <h4>1.5 miles from job location</h4>
        <p>
        Singles: $120 <br />
        Doubles: $145
        <button className = 'bknw'>Book Now</button>
      </p>
    </div>
  </div>
  </div>
  
  <div class     = "column">
  <div class     = "card">
  <img src       = {logo} className = 'App-logo' />
  <div className = 'section'>
      <h4>1.5 miles from job location</h4>
        <p>
        Singles: $120 <br />
        Doubles: $145
        <button className = 'bknw'>Book Now</button>
      </p>
    </div>
  </div>
  </div>
  
  <div class     = "column">
  <div class     = "card">
  <img src       = {logo} className = 'App-logo' />
  <div className = 'section'>
      <h4>1.5 miles from job location</h4>
        <p>
        Singles: $120 <br />
        Doubles: $145
        <button className = 'bknw'>Book Now</button>
      </p>
    </div>
  </div>
  </div>
</div>
</div>
</div>
<button className='frame'>
  <img src={frame} />
</button>
</div>
  );
};

export default MainSection;
