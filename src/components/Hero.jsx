import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/hero.css";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Watermark Logo */}
      <img 
        src="/images/hril2.jpg" 
        alt="Logo Watermark" 
        className="watermark" 
      />

      <div className="container hero-content">
        <h1>Luxury Stay Experience</h1>
        <p>Comfort & Elegance in the Heart of the City</p>
        
        {/* On click, the guest is sent to the Rooms page */}
        <button className="btn" onClick={() => navigate('/rooms')}>
          Book Rooms
        </button>
      </div>
    </section>
  );
}

export default Hero;
