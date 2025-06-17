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
            <img src="src/images/wedding cake.jpg" alt="Custom Cakes" />
            <h3>Custom Cakes</h3>
            <p>Beautiful cakes for any occasion</p>
          </div>
          <div className="product-card">
            <img src="src/images/cupcake.jpg" alt="Cupcakes" />
            <h3>Cupcakes</h3>
            <p>Delicious cupcakes in various flavors</p>
          </div>
          <div className="product-card">
            <img src="src\images\bread.jpg" alt="Artisan Bread" />
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