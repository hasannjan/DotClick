import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainSection from './MainSection';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app">
      <Sidebar
        selectedOption={selectedOption}
        handleOptionSelect={handleOptionSelect}
      />
      <MainSection 
      selectedOption={selectedOption} />
    </div>
  );
};

export default App;
