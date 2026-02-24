import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Navigate and close sidebar
  const handleLogoClick = () => {
    navigate("/");
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-wrapper">
          {/* 1. Hamburger Icon */}
          <div className={`hamburger ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {/* 2. Logo (Clickable via logic, not a wrapper Link) */}
          <h2 className="logo" onClick={handleLogoClick}>
            Hotel Rupam Inn
          </h2>
        </div>
      </nav>

      {/* 3. Sliding Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
           <h3>Menu</h3>
        </div>
        <ul className="sidebar-links">
          <li><Link to="/" onClick={toggleSidebar}>🏠︎ Home</Link></li>
          <li><Link to="/rooms" onClick={toggleSidebar}>🛌 Rooms</Link></li>
          <li><Link to="/menu" onClick={toggleSidebar}>🍽 Foods</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>📜 About</Link></li>
          <li><Link to="/contact" onClick={toggleSidebar}>📩 Contact</Link></li>
        </ul>
      </aside>

      {/* 4. Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}

export default Navbar;
