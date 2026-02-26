import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Splash from './components/Splash';
import Home from './pages/home';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Logic to calculate scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. The Scroll Bar (Stays outside AnimatePresence so it doesn't vanish) */}
      {!isLoading && (
        <div className="scroll-progress-container">
          <div 
            className="scroll-progress-fill" 
            style={{ 
              width: `${scrollProgress}%`,
              transition: 'width 0.1s ease-out' // Smooths out the movement
            }} 
          />
        </div>
      )}

      {/* 2. Your existing Splash and Home logic */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Splash key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="main" className="App-ready">
            <Home />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;