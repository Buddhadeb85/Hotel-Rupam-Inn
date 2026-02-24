import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <div className="about-page">
      {/* Small Header Section */}
      <section className="about-header section">
        <div className="container">
          <h1 className="section-title">Our Story</h1>
          <p className="about-intro">Refining Hospitality Since 2010.</p>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="about-split section">
        <div className="container split-wrapper">
          <div className="split-image">
            <img src="/images/hotel-exterior.jpg" alt="Hotel Interior" />
          </div>
          <div className="split-text">
            <h2>Luxury Meets Comfort</h2>
            <p>
              Located in the heart of the city, Hotel Rupam Inn has been a 
              sanctuary for travelers seeking elegance and warmth. We believe 
              that every stay should be more than just a room; it should be 
              a memorable experience defined by detail.
            </p>
            <p>
              From our award-winning dining to our carefully curated suites, 
              we combine traditional hospitality with modern amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats/Highlights Bar */}
      <section className="about-stats">
        <div className="container stats-grid">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Luxury Rooms</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Room Service</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Happy Guests</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
