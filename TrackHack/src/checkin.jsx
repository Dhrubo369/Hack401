import React, { useState } from 'react';
import './CheckIn.css';

function CheckIn({ onCheckIn, currentDate, bestStreak, ongoingStreak }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const currentDay = currentDate.getDate();

  // Function to handle the check-in click
  const handleCheckInClick = () => {
    setIsAnimating(true); // Activate the animation

    // Call the passed onCheckIn function
    if (onCheckIn) {
      onCheckIn();
    }

    // Reset the animation state after the animation duration
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // This duration should match your CSS animation duration
  };

  return (
    <div className="check-in-container">
      <button 
        className={`check-in-btn ${isAnimating ? 'check-in-btn-animate' : ''}`} 
        onClick={handleCheckInClick}>
        Check In
      </button>
      <p className="streak-msg">Ongoing streak: {ongoingStreak} days</p>
      <p className="streak-msg">Best streak: {bestStreak} days</p>
    </div>
  );
}

export default CheckIn;
