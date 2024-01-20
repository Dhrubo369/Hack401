import React from 'react';
import './CheckIn.css';

function CheckIn({ onCheckIn, currentDate, bestStreak, ongoingStreak }) {
  // Extract the day from currentDate
  const currentDay = currentDate.getDate();

  return (
    <div className="check-in-container">
      <button className="check-in-btn" onClick={onCheckIn}>
        Check In
      </button>
      <p className="streak-msg">Ongoing streak: {ongoingStreak} days</p>
      <p className="streak-msg">Best streak: {bestStreak} days</p>
    </div>
  );
}

export default CheckIn;
