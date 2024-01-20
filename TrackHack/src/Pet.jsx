import React from 'react';

function Pet({ daysFree }) {
  let petStage;

  if (daysFree < 5) {
    petStage = 'pet-stage-1.png'; // Image for initial stage
  } else if (daysFree < 10) {
    petStage = 'pet-stage-2.png'; // Image for next stage
  } else {
    petStage = 'pet-stage-3.png'; // Image for a more advanced stage
  }

  // Add more stages as needed

  return (
    <div>
      <h2>Your Virtual Pet</h2>
      <img src={petStage} alt="Virtual Pet" />
    </div>
  );
}

export default Pet;
