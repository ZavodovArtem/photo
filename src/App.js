import './App.css';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import Home from './Home';
// import About from './About';
import BrowserR from './BrowserRouter';
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
      <ParallaxProvider>
        <BrowserR />
      </ParallaxProvider>
    </>
  );
}



export default App;
