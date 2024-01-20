import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './Animation - 1705740725751.json';
import './TreeAnimation.css'; // Add this line to import the CSS

const totalFrames = 100;
const maxProgress = 30;

function TreeAnimation({ progress }) {
  const [playState, setPlayState] = useState({
    isStopped: true,
    isPaused: true
  });

  useEffect(() => {
    // Calculate the frame to stop at
    const stopFrame = Math.floor((progress / maxProgress) * totalFrames);

    // Play the animation and then pause it at the stopFrame
    setPlayState({ isStopped: false, isPaused: false });
    
    setTimeout(() => {
      setPlayState({ isStopped: false, isPaused: true });
    }, stopFrame * 10); // Adjust timing based on animation speed

  }, [progress]);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="tree-animation-container">
      <Lottie options={defaultOptions}
              isStopped={playState.isStopped}
              isPaused={playState.isPaused} />
    </div>
  );
}

export default TreeAnimation;
