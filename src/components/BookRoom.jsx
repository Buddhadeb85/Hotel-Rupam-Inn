import React, { useState } from 'react';
import "../styles/BookRoom.css";

const BookRoom = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for checking availability
    alert(`Searching for rooms: ${formData.checkIn} to ${formData.checkOut}`);
  };

  return (
    <section className="booking-container" id="booking-section">
      <h2 className="booking-title">Reserve Your Stay</h2>
      <p className="booking-subtitle">Experience elegance at Hotel Rupam Inn</p>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Check-In</label>
          <input 
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, checkIn: e.target.value})} 
          />
        </div>

        <div className="input-group">
          <label>Check-Out</label>
          <input 
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, checkOut: e.target.value})} 
          />
        </div>

        <div className="input-group">
          <label>Guests</label>
          <select onChange={(e) => setFormData({...formData, guests: e.target.value})}>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3+ Guests</option>
          </select>
        </div>

        <button type="submit" className="book-btn">Check Availability</button>
      </form>
    </section>
  );
};

export default BookRoom;
