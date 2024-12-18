// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Glowna from './glowna';
import GaleriaKot from './GaleriaKot';
import GaleriaPies from './GaleriaPies';
import './main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Glowna />} />
          <Route path="/galeriakot" element={<GaleriaKot />} />
          <Route path="/galeriapies" element={<GaleriaPies />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
