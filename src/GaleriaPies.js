// GaleriaPies.js
import React from 'react';
import { useNavigate } from 'react-router';
import './main.css';

function GaleriaPies() {
  const navigate = useNavigate();

  return (
    <div className="gallery">
      <h2>Galeria Psów</h2>
      <img src="/dog.png" alt="Pies" className="gallery-img" />
      <button onClick={() => navigate('/')} className="btn">
        Powrót
      </button>
    </div>
  );
}

export default GaleriaPies;
