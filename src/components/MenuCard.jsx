import React, { useState, useEffect } from "react";
import "../styles/menucard.css";

function MenuCard({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Logic to change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [item.images.length]);

  return (
    <div className="menu-card">
      <img src="/images/hril2.jpg" alt="Logo" className="watermark" />

      {/* Main Item Image - Now dynamic */}
      <img
        src={item.images[currentImageIndex]}
        alt={item.name}
        className="menu-img"
      />

      <div className="menu-info">
        <div className="category-tag">{item.type}</div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="price-row">
          <span>₹{item.price}</span>
          <button className="btn">Order</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
