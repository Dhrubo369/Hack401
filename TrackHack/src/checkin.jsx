import React from 'react';
import './CheckIn.css';

function CheckIn({ onCheckIn, currentDay, totalDays, bestStreak, ongoingStreak }) {
  return (
    <div className="check-in-container">
      <button 
        className="check-in-btn" 
        onClick={onCheckIn} 
        disabled={currentDay > totalDays}
      >
        Check In
      </button>
      <p className="streak-msg">Ongoing streak: {ongoingStreak} days</p>
      <p className="streak-msg">Best streak: {bestStreak} days</p>
    </div>
  );
}

export default CheckIn;
