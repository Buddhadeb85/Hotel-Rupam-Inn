import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: "Breakfast", img: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=400&q=80" },
  { name: "Lunch", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80" },
  { name: "Dinner", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80" },
  { name: "Snacks", img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=80" },
  { name: "Beverages", img: "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&w=400&q=80" },
  { name: "Veg", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" }
];

function HomeCategoryCard() {
  const navigate = useNavigate();

  return (
    <div className="home-category-grid">
      {categories.map((cat) => (
        <div 
          key={cat.name} 
          className="cat-card"
          onClick={() => navigate(`/menu?type=${cat.name}`)}
        >
          <img src={cat.img} alt={cat.name} className="cat-img" />
          
          <div className="cat-overlay">
            <div className="cat-text">
              <h3>{cat.name}</h3>
              <p className="view-link">View Collection →</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCategoryCard;
