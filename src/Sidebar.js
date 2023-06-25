import React from 'react';

const Sidebar = ({ selectedOption, handleOptionSelect }) => {
  const options = ['Current requests', 'Ongoing Stays', 'Previous Stays', 'Reports'];

  return (
    <div className="sidebar">
        <h1>LOGIN</h1>
        <br />

      <ul>
        {options.map((option) => (
          <li
            key={option}
            className={selectedOption === option ? 'active' : ''}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
            <hr />
          </li>
        ))}
      </ul>  
      <button className='logout-btn'>Log-Out</button>
      <div className='b-text'>
        <p>Help Desk 
          <br />
        786-874 9988
        </p>
      
      </div>
    </div>
  );
};

export default Sidebar;
