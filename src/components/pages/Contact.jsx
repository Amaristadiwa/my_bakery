import React, { useState } from 'react';
import '../styles/App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
     name: '',
    email: '',
    phone: '',
    message: ''
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <h1>Contact Us</h1>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Visit Us</h2>
          <p>123 Bakery Street</p>
          <p>Sweetville, SV 12345</p>
          <br />
          <h2>Hours</h2>
          <p>Monday - Friday: 7am - 7pm</p>
          <p>Saturday: 8am - 6pm</p>
          <p>Sunday: 9am - 4pm</p>
          <br />
          <h2>Contact Info</h2>
          <p>Phone: 077 470 0857</p>
          <p>Email: tadiwamangate9@gmail.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map">
        <h2>Find Us</h2>
        <div className="map-container">
          {/* This would be replaced with an actual map embed */}
          <div className="map-placeholder">
            <img src="src/images/Sultanas-Bakery-Café-on-Google-Maps-scaled.webp" alt="" />
            <p>Map would be displayed here</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;