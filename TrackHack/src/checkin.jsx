// CheckIn.jsx
import React, { useState, useEffect } from 'react';
import './CheckIn.css';

function CheckIn({ onCheckIn, currentDay, totalDays, reset }) {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const savedStreak = parseInt(localStorage.getItem('streak'), 10) || 0;
    setStreak(savedStreak);

    if (reset) {
      setStreak(0);
      localStorage.removeItem('streak');
    }
  }, [reset]);

  const handleCheckIn = () => {
    if (currentDay < totalDays) {
      onCheckIn(); // Increment the day on the map

      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem('streak', newStreak.toString());
    }
  };

  return (
    <div className="check-in-container">
      <button className="check-in-btn" onClick={handleCheckIn} disabled={currentDay >= totalDays}>
        {currentDay < totalDays ? 'Check In' : 'Journey Completed'}
      </button>
      <p className="streak-msg">Your current streak: {streak} days</p>
    </div>
  );
}

export default CheckIn;
