// Glowna.js
import React from 'react';
import { useNavigate } from 'react-router';
import './main.css';

function Glowna() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Witaj w naszej galerii!</h1>
      <p>Wybierz jedną z galerii:</p>
      <div className="button-container">
        <button onClick={() => navigate('/galeriakot')} className="btn">
          Galeria Kotów
        </button>
        <button onClick={() => navigate('/galeriapies')} className="btn">
          Galeria Psów
        </button>
      </div>
    </div>
  );
}

export default Glowna;
