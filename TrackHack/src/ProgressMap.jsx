import React from 'react';
import './ProgressMap.css';

function ProgressMap({ currentDate }) {
  const currentDay = currentDate.getDate();
  const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // Days in current month

  return (
    <div className="progress-map">
      {[...Array(totalDays)].map((_, index) => (
        <div key={index} className={`day ${index < currentDay ? 'completed' : ''}`}>
          <span className="day-number">{index + 1}</span>
          {index + 1 === currentDay && (
            <span className="current-day-indicator">🐱</span> // Your cat avatar or indicator
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressMap;
