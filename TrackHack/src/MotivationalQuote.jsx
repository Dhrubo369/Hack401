// MotivationalQuote.jsx
import React, { useState, useEffect } from 'react';

function MotivationalQuote() {
  const quotes = [
    "Your health is your greatest wealth. Quit smoking and invest in yourself.",
    "Every cigarette you don't smoke brings you one step closer to a healthier life.",
    "Don't let a small stick control your destiny. You have the power to quit.",
    "Smoking may seem like a solution, but quitting is the real answer.",
    "A smoke-free life is a life full of possibilities.",
    "Don't be a slave to tobacco; break the chains and set yourself free.",
    "You are not defined by your past. Quitting smoking is a chance for a fresh start.",
    "The first step to a smoke-free future is the hardest. Keep going!",
    "Choose health, choose life, choose to quit smoking today.",
    "You're not giving up; you're gaining back control of your life.",
    "Believe in yourself. You have the strength to overcome any addiction.",
    "Every day without a cigarette is a victory over your cravings.",
    "Smoke-free lungs breathe life into your dreams.",
    "Smoking may provide temporary relief, but quitting offers lasting happiness.",
    "Cigarettes steal your time and health. Reclaim both by quitting.",
    "Quitting smoking is the first step to a longer and happier life.",
    "Break the habit before it breaks you.",
    "Your lungs will thank you for every smoke-free day.",
    "Smoking doesn't relieve stress; it creates it. Quit to find true peace.",
    "You are not a smoker; you are a quitter in the making.",
    "You have the power to rewrite your story without cigarettes.",
    "Each craving overcome is a victory won.",
    "You're not quitting; you're upgrading to a healthier version of yourself.",
    "Smoking is a burden; quitting is liberation.",
    "Make quitting a priority, and your health will thank you.",
    "A smoke-free life is a life filled with more joy and vitality.",
    "Quitting smoking is a gift you give to yourself.",
    "Your future self will thank you for quitting today.",
    "Breaking free from cigarettes is a courageous act of self-love.",
    "You have the strength within you to conquer any challenge, including quitting smoking."
  ];
  
  const [dailyQuote, setDailyQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setDailyQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote(); // Initial quote when the component mounts

    const quoteInterval = setInterval(() => {
      getRandomQuote(); // Update the quote at regular intervals (e.g., every 30 seconds)
    }, 10000); // Change the interval duration as needed

    // Clear the interval when the component unmounts
    return () => clearInterval(quoteInterval);
  }, []);

  return <blockquote>{dailyQuote}</blockquote>;
}

export default MotivationalQuote;
