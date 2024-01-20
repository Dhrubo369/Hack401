import React, { useState, useEffect } from 'react';
import CheckIn from './CheckIn';
import ProgressMap from './ProgressMap';
import MotivationalQuote from './MotivationalQuote';
import './App.css';

function App() {
  const totalDays = 30;
  const [currentDay, setCurrentDay] = useState(1);
  const [bestStreak, setBestStreak] = useState(0);
  const [ongoingStreak, setOngoingStreak] = useState(0);

  useEffect(() => {
    const savedBestStreak = parseInt(localStorage.getItem('bestStreak'), 10) || 0;
    const savedOngoingStreak = parseInt(localStorage.getItem('ongoingStreak'), 10) || 0;
    const savedDay = parseInt(localStorage.getItem('currentDay'), 10) || 1;

    setBestStreak(savedBestStreak);
    setOngoingStreak(savedOngoingStreak);
    setCurrentDay(savedDay);
  }, []);

  const handleCheckIn = () => {
    if (currentDay <= totalDays) {
      const newDay = currentDay + 1;
      const newOngoingStreak = ongoingStreak + 1;
      
      setCurrentDay(newDay);
      setOngoingStreak(newOngoingStreak);
      
      localStorage.setItem('currentDay', newDay.toString());
      localStorage.setItem('ongoingStreak', newOngoingStreak.toString());
      
      if (newOngoingStreak > bestStreak) {
        setBestStreak(newOngoingStreak);
        localStorage.setItem('bestStreak', newOngoingStreak.toString());
      }
    }
  };

  const handleReset = () => {
    setCurrentDay(1);
    setOngoingStreak(0);

    localStorage.setItem('currentDay', '1');
    localStorage.setItem('ongoingStreak', '0');
  };

  return (
    <div className="App">
      <h1>Nicotine-Free Tracker</h1>
      <CheckIn 
        onCheckIn={handleCheckIn} 
        currentDay={currentDay} 
        totalDays={totalDays} 
        bestStreak={bestStreak} 
        ongoingStreak={ongoingStreak}
      />
      <ProgressMap day={currentDay} />
      <MotivationalQuote />
      <button onClick={handleReset} className="reset-button">Reset Progress</button>
    </div>
  );
}

export default App;
