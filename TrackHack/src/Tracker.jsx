import React, { useState, useEffect } from 'react';
import './Tracker.css'; // Ensure this CSS file contains the new styles

function Tracker({ daysFree, setDaysFree }) {
  const [checkedIn, setCheckedIn] = useState(false);
  const [reward, setReward] = useState('');

  useEffect(() => {
    // Reset check-in status at midnight
    const timer = setTimeout(() => {
      setCheckedIn(false);
      setReward('');
    }, calculateTimeToMidnight());
    return () => clearTimeout(timer);
  }, [checkedIn]);

  const handleCheckIn = () => {
    if (!checkedIn) {
      setDaysFree(daysFree + 1);
      setCheckedIn(true);
      setReward(determineReward(daysFree));
    }
  };

  const determineReward = (days) => {
    if (days % 5 === 0) return '🌟 You earned a star!';
    if (days % 10 === 0) return '🎉 Special milestone!';
    return '✅ Great job!';
  };

  const calculateTimeToMidnight = () => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
  };

  const milestones = [5, 10, 15, 20, 25, 30]; // Define milestones
  const characterPosition = (daysFree % milestones[milestones.length - 1]) / milestones[milestones.length - 1] * 100;


  return (
    <div className="tracker">
      <h2>Your Journey</h2>
      <div className="roadmap">
        <div className="character" style={{ left: `${characterPosition}%` }}>
          🚶‍♂️ {/* Replace with a character image or icon as needed */}
        </div>
        {milestones.map((milestone, index) => (
          <div key={index} className={`milestone ${daysFree >= milestone ? 'reached' : ''}`}>
            <span>{milestone} Days</span>
          </div>
        ))}
      </div>
      <p>Nicotine-free days: {daysFree}</p>
      <button
        className={`checkin-button ${checkedIn ? 'checked-in' : ''}`}
        onClick={handleCheckIn}
        disabled={checkedIn}
      >
        {checkedIn ? 'Checked In Today' : 'Check-in Today'}
      </button>
      {reward && <div className="reward">{reward}</div>}
    </div>
  );
}

export default Tracker;
