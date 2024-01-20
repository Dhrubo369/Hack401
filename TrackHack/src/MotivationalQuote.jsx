// MotivationalQuote.jsx
import React, { useState, useEffect } from 'react';

function MotivationalQuote() {
  const quotes = [
    "You're stronger than your cravings.",
    // Add more quotes here
  ];
  const [dailyQuote, setDailyQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setDailyQuote(quotes[randomIndex]);
  }, []);

  return <blockquote>{dailyQuote}</blockquote>;
}

export default MotivationalQuote;
