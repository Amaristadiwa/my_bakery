import React from 'react';
import '../styles/App.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Sweet Delights Bakery</h1>
          <p>Delicious treats made with love and the finest ingredients</p>
          <button className="cta-button">Explore Our Products</button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Our Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img url="https://i.pinimg.com/736x/21/fe/7a/21fe7a38d278bdff7f0a7c4be6729199.jpg" alt="Custom Cakes" />
            <h3>Custom Cakes</h3>
            <p>Beautiful cakes for any occasion</p>
          </div>
          <div className="product-card">
            <img url="https://i.pinimg.com/736x/1a/b2/c3/1ab2c32b029f8e6845a880bf9a27597a.jpg" alt="Cupcakes" />
            <h3>Cupcakes</h3>
            <p>Delicious cupcakes in various flavors</p>
          </div>
          <div className="product-card">
            <img url="https://i.pinimg.com/736x/36/25/8b/36258bdc20ace08cb9ab5328d811f8c7.jpg" alt="Artisan Bread" />
            <h3>Artisan Bread</h3>
            <p>Freshly baked bread daily</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The best bakery in town! Their pastries are always fresh and delicious."</p>
          <p>- Sarah J.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;