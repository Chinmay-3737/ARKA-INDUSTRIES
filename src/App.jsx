import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Splash from './components/Splash';
import Home from './pages/home';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Splash key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;