import React from "react";
import { BrowserRouter } from 'react-router-dom';

import Weather from './components/Weather';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Weather />
      </BrowserRouter>
    </div>
  );
}

export default App;
