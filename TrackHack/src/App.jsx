// App.jsx
import React, { useState, useEffect } from 'react';
import CheckIn from './CheckIn';
import ProgressMap from './ProgressMap';
import MotivationalQuote from './MotivationalQuote';
import './App.css';

function App() {
  const totalDays = 30; // Define the total number of days for the journey
  const [currentDay, setCurrentDay] = useState(1);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    // Load the current day from local storage
    const savedDay = parseInt(localStorage.getItem('currentDay'), 10);
    if (savedDay) {
      setCurrentDay(savedDay);
    }
  }, []);

  const handleCheckIn = () => {
    if (currentDay < totalDays) {
      const newDay = currentDay + 1;
      setCurrentDay(newDay);
      localStorage.setItem('currentDay', newDay.toString());
    }
  };

  const handleReset = () => {
    setCurrentDay(1);
    localStorage.clear();
    setReset(true);
  };

  return (
    <div className="App">
      <h1>Nicotine-Free Tracker</h1>
      <CheckIn onCheckIn={handleCheckIn} currentDay={currentDay} totalDays={totalDays} reset={reset} />
      <ProgressMap day={currentDay} />
      <MotivationalQuote />
      <button onClick={handleReset} className="reset-button">Reset Progress</button>
    </div>
  );
}

export default App;
