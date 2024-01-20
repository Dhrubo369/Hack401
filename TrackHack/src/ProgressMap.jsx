import React from 'react';
import './ProgressMap.css';

function ProgressMap({ day }) {
  const totalDays = 30;
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="progress-map">
      {days.map(d => (
        <div key={d} className={`day-marker ${d === day ? 'active' : ''}`} title={`Day ${d}: Stay strong!`}>
          {d === day ? '🐱' : d}
        </div>
      ))}
    </div>
  );
}

export default ProgressMap;
