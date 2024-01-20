import React, { useState, useEffect } from 'react';
import CheckIn from './CheckIn';
import './CheckIn.css';
import ProgressMap from './ProgressMap';
import MotivationalQuote from './MotivationalQuote';
import './MotivationalQuote.css';
import TreeAnimation from './TreeAnimation';
import './App.css';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [bestStreak, setBestStreak] = useState(0);
  const [ongoingStreak, setOngoingStreak] = useState(0);
  const [co2Saved, setCo2Saved] = useState(0);
const [healthBenefits, setHealthBenefits] = useState({ 
  lungFunction: 0, 
  heartAttackRisk: 100 // Assuming 100% is the starting risk
});
  const [treeGrowthStage, setTreeGrowthStage] = useState(0);

  useEffect(() => {
    const savedBestStreak = parseInt(localStorage.getItem('bestStreak'), 10) || 0;
    const savedStartDate = new Date(localStorage.getItem('startDate')) || new Date();
    const savedDate = new Date(localStorage.getItem('currentDate')) || new Date();
    const savedCo2Saved = parseFloat(localStorage.getItem('co2Saved')) || 0;
    const savedHealthBenefits = JSON.parse(localStorage.getItem('healthBenefits')) || { lungFunction: 0 };

    setBestStreak(savedBestStreak);
    setStartDate(savedStartDate);
    setCurrentDate(savedDate);
    setCo2Saved(savedCo2Saved);
    setHealthBenefits(savedHealthBenefits);
  }, []);

  const handleCheckIn = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1); 
    setCurrentDate(newDate);
    updateStreaksAndBenefits(newDate, startDate);
  
    // Directly set the tree growth stage here
    setTreeGrowthStage(prevStage => prevStage + 50);
  };

  const handleReset = () => {
    // This resets the date and streak, but keeps the CO2 savings and health benefits
    const resetDate = new Date();
    setStartDate(resetDate);
    setOngoingStreak(0);
    setCurrentDate(resetDate);
    updateStreaksAndBenefits(resetDate, resetDate, false);
  };

  const handleFullReset = () => {
    // This resets everything including CO2 savings and health benefits
    const resetDate = new Date();
    setStartDate(resetDate);
    setOngoingStreak(0);
    setCurrentDate(resetDate);
    setCo2Saved(0);
    setHealthBenefits({ lungFunction: 0 });
    localStorage.clear();
    updateStreaksAndBenefits(resetDate, resetDate, true);
  };

  const updateStreaksAndBenefits = (current, start, resetAll = false) => {
    const timeDiff = current - start;
    const newOngoingStreak = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    setOngoingStreak(newOngoingStreak);
    localStorage.setItem('ongoingStreak', newOngoingStreak.toString());
    localStorage.setItem('currentDate', current.toString());
    localStorage.setItem('startDate', start.toString());

    if (newOngoingStreak > bestStreak) {
      setBestStreak(newOngoingStreak);
      localStorage.setItem('bestStreak', newOngoingStreak.toString());
    }

    if (!resetAll) {
      calculateBenefits(newOngoingStreak);
    }
  };

  const calculateBenefits = (streak) => {
    // CO2 calculation
    const co2PerPack = 2.6; // CO2 emissions for smoking a pack of 20 cigarettes
    const cigarettesPerDay = 5; // Average cigarettes smoked per day before quitting
    const packsPerDay = cigarettesPerDay / 20; // Fraction of a pack smoked per day
    const dailyCo2Saved = co2PerPack * packsPerDay; // Daily CO2 savings
    const newCo2Saved = co2Saved + (streak * dailyCo2Saved);
    setCo2Saved(newCo2Saved);
    localStorage.setItem('co2Saved', newCo2Saved.toString());
  
    // Lung function improvement calculation
    // Example: Lung function improves by 1% per day up to a maximum of 100%
    const lungFunctionImprovementRate = 1; // 1% improvement per day
    const newLungFunction = Math.min(streak * lungFunctionImprovementRate, 100); // Cap at 100%
    
    // Heart health improvement calculation
    // Example: Heart health risk reduction of 50% in one year (365 days)
    const riskReductionRate = 50 / 365; // Daily reduction rate
    const newHeartAttackRisk = Math.max(100 - (streak * riskReductionRate), 50); // Risk starts at 100% and reduces to 50% after one year
    
    const newHealthBenefits = {
      lungFunction: newLungFunction,
      heartAttackRisk: newHeartAttackRisk, // New metric added
      // ... include other health metrics if available
    };
    setHealthBenefits(newHealthBenefits);
    localStorage.setItem('healthBenefits', JSON.stringify(newHealthBenefits));
  };
  
  

  return (
    <div className="App">
      <h1>Detox Me</h1>
      {/* Include the TreeAnimation component and pass the progress prop */}
      <TreeAnimation progress={treeGrowthStage} />
      <CheckIn 
        onCheckIn={handleCheckIn} 
        currentDate={currentDate} 
        bestStreak={bestStreak} 
        ongoingStreak={ongoingStreak}
      />
      <ProgressMap currentDate={currentDate} />
      <MotivationalQuote />
      <button onClick={handleReset} className="reset-button">Reset Progress</button>
      <button onClick={handleFullReset} className="full-reset-button">Full Game Reset</button>
      <div className="benefits-container">
      <p>CO2 Saved: {co2Saved && co2Saved.toFixed(2)} kg</p>
      <p>Lung Function Improvement: {healthBenefits.lungFunction && healthBenefits.lungFunction.toFixed(2)}%</p>
      <p>Heart Attack Risk Reduction: {healthBenefits.heartAttackRisk && healthBenefits.heartAttackRisk.toFixed(2)}%</p>
      </div>
    
    </div>
  );
}

export default App;
