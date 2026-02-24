import "../styles/hero.css";
// Remove global.css import from here - it's already in main.jsx!

function Hero() {
  return (
    <section className="hero"> {/* "section" class from global.css handles the padding */}
      <img 
        src="/images/hril2.jpg" 
        alt="Logo Watermark" 
        className="watermark" 
      />
      <div className="container hero-content">
        <h1>Luxury Stay Experience</h1>
        <p>Comfort & Elegance in the Heart of the City</p>
        <button className="btn">Book Now</button>
      </div>
    </section>
  );
}

export default Hero;
