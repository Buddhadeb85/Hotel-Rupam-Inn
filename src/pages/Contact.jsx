import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <div className="contact-page section">
      <div className="container">
        <h1 className="section-title">Get In Touch</h1>
        <p className="contact-subtitle">We’d love to hear from you. Whether you have a question about rooms or dining, our team is here to help.</p>
        
        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-item">
              <h3>Our Location</h3>
              <p>123 Luxury Road, City Center, State, 56789</p>
            </div>
            <div className="info-item">
              <h3>Reservations</h3>
              <p>Phone: +91 12345 67890</p>
              <p>Email: stay@hotelrupaminn.com</p>
            </div>
            <div className="info-item">
              <h3>Socials</h3>
              <div className="social-links">
                <span>Instagram</span> • <span>Facebook</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <textarea placeholder="How can we help you?" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
