import React, { useState, useEffect } from "react";
import "../styles/menucard.css";

function MenuCard({ item }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Only start interval if there is more than one image
    if (item.images && item.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [item.images]);

  // Handle cases where images might be missing in data
  const currentImg = item.images && item.images.length > 0 
    ? item.images[currentImageIndex] 
    : "/images/pasta.jpg"; 

  return (
    <div className="menu-card">
      {/* Container for the image to maintain high-quality aspect ratio */}
      <div className="img-container">
        <img
          src={currentImg}
          alt={item.name}
          className="menu-img"
          loading="lazy" 
        />
        {/* Logo Watermark moved inside img-container for better layering */}
        <img src="/images/hril2.jpg" alt="Logo" className="watermark" />
      </div>

      <div className="menu-info">
        <span className="category-tag">{item.type || item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="price-row">
          <span className="price-text">₹{item.price}</span>
          <button className="btn">Order</button>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
