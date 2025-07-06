import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Landing from './Landing';
import Portfolio from './Portfolio';
import BackToTop from './BackToTop';
import './App.css';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPortfolio(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ThemeToggle />
      {!showPortfolio && <Landing />}
      {showPortfolio && <Portfolio />}
      <BackToTop />
    </div>
  );
}

export default App;
