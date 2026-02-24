import React from 'react';
import '../styles/rooms.css';

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
  return (
    <div className="rooms-page section">
      <div className="container">
        <h1 className="section-title">Our Accommodations</h1>
        <p className="rooms-subtitle">Designed for ultimate relaxation and elegance.</p>

        <div className="rooms-grid">
          {roomsData.map(room => (
            <div key={room.id} className="room-card">
              <div className="room-image">
                <img src={room.image} alt={room.name} />
                <span className="room-price">{room.price}/night</span>
              </div>
              <div className="room-info">
                <h3>{room.name}</h3>
                <ul className="room-features">
                  {room.features.map((feat, index) => (
                    <li key={index}>{feat}</li>
                  ))}
                </ul>
                <button className="btn btn-outline">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
