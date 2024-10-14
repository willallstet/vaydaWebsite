import React, { useRef, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home'; 
import Merch from './Merch';


function App() {
  const mountRef = useRef(null);
  useEffect(() => {
    const currentMount = mountRef.current;
    const sparklesContainer = document.querySelector('.sparkles-container');

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      const isBinary = Math.random() < 0.1; // 10% chance to create a binary character
      if (isBinary) {
        sparkle.className = 'sparkle terminal-green';
        sparkle.textContent = Math.random() < 0.5 ? '0' : '1';
      } else {
        sparkle.className = 'sparkle';
        const characters = '･ﾟ✧･.☽˚｡･ﾟ✧･.⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆˖⁺‧₊♡₊‧⁺˖';
        sparkle.textContent = characters[Math.floor(Math.random() * characters.length)];
      }
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      sparklesContainer.appendChild(sparkle);

      const randomDuration = Math.random() * 4000 + 1000; // Random duration between 1000ms (1s) and 5000ms (5s)
      setTimeout(() => {
        sparklesContainer.removeChild(sparkle);
      }, randomDuration);
    };

    const interval = setInterval(createSparkle, 300);

    // Clean up on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <div className="sparkles-container"></div>
      <header className="App-header">
      
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merch" element={<Merch />} />
      </Routes>
    </div>
  );
}

export default App;
