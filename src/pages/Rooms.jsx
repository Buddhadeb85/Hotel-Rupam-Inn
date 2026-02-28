import React from 'react';
import '../styles/rooms.css';
import BookRoom from '../components/BookRoom';

const roomsData = [
  {
    id: 1,
    name: "Deluxe Suite",
    price: "₹4,500",
    image: "/images/deluxe.jpg",
    features: ["King Bed", "City View", "Free Wi-Fi"]
  },
  {
    id: 2,
    name: "Executive Room",
    price: "₹3,200",
    image: "/images/executive.jpg",
    features: ["Queen Bed", "Work Desk", "Mini Bar"]
  },
  {
    id: 3,
    name: "Family Suite",
    price: "₹6,000",
    image: "/images/family.jpg",
    features: ["2 Bedrooms", "Balcony", "Kitchenette"]
  }
];

function Rooms() {
  // Functional logic to scroll back up to the booking form
  const scrollToBook = () => {
    const element = document.getElementById('booking-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if ID is not found
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="rooms-page">
      {/* The booking form is rendered here at the top */}
      <BookRoom />

      <div className="container">
        <header className="rooms-header">
          <h1 className="section-title">Our Accommodations</h1>
          <p className="rooms-subtitle">
            Designed for ultimate relaxation and elegance at Hotel Rupam Inn.
          </p>
        </header>

        <div className="rooms-grid">
          {roomsData.map((room) => (
            <article key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.name} loading="lazy" />
                <div className="room-price">
                  <span>{room.price}</span>/night
                </div>
              </div>

              <div className="room-info">
                <h3>{room.name}</h3>
                <ul className="room-features">
                  {room.features.map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                </ul>
                
                <div className="room-actions">
                  {/* Clicking this now scrolls the user to the form above */}
                  <button 
                    className="btn btn-outline responsive-btn" 
                    onClick={scrollToBook}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
