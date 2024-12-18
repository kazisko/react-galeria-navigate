// GaleriaKot.js
import React from 'react';
import { useNavigate } from 'react-router';
import './main.css';

function GaleriaKot() {
  const navigate = useNavigate();

  return (
    <div className="gallery">
      <h2>Galeria Kotów</h2>
      <img src="/cat.png" alt="Kot" className="gallery-img" />
      <button onClick={() => navigate('/')} className="btn">
        Powrót
      </button>
    </div>
  );
}

export default GaleriaKot;
