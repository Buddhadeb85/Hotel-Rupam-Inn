import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import menuData from "../data/menuData";
import MenuCard from "../components/MenuCard";
import "../styles/menu.css";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();

  // Sync with Home Page selection
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (type) setActiveCategory(type);
  }, [location]);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Veg", "Non-Veg", "Snacks", "Beverages"];

  // Toggle Accordion Logic
  const toggleSection = (cat) => {
    setOpenSections(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <div className="menu-container">
      {/* Modern Top-Left Sidebar Filter */}
      <aside className="menu-sidebar">
        <h4>Filters</h4>
        <div className="filter-list">
          {categories.map(cat => (
            <button 
              key={cat}
              className={activeCategory === cat ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </aside>

      {/* Collapsible Catalog */}
      <main className="menu-content">
        {categories.filter(c => c !== "All").map(cat => {
          // Filter items logic
          const items = menuData.filter(item => 
            (activeCategory === "All" || activeCategory === cat) && 
            (item.category === cat || item.type === cat)
          );

          if (items.length === 0) return null;

          return (
            <div key={cat} className="menu-section">
              <button className="section-header" onClick={() => toggleSection(cat)}>
                {cat} <span>{openSections[cat] ? "−" : "+"}</span>
              </button>
              
              <div className={`section-body ${openSections[cat] ? "open" : ""}`}>
                <div className="menu-grid">
                  {items.map(item => <MenuCard key={item.id} item={item} />)}
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Menu;
