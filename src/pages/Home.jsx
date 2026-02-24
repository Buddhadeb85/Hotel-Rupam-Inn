import React from 'react';
import Hero from '../components/Hero';
import HomeCategoryCard from '../components/HomeCategoryCard';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="category-section section">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          
          {/* This component handles its own grid layout */}
          <HomeCategoryCard />
        </div>
      </section>
    </div>
  );
}

export default Home;
