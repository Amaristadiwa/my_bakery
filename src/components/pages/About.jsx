import React from 'react';
import '../styles/App.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>Our Story</h1>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Sweet Delights Bakery</h2>
          <p>
            Founded in 2010, Sweet Delights Bakery started as a small family business with a passion 
            for creating delicious baked goods. Our founder, Maria Johnson, began baking in her home 
            kitchen, sharing her treats with friends and family.
          </p>
          <p>
            Today, we've grown into a beloved local bakery, but we still maintain the same commitment 
            to quality and personal touch that we started with. All our products are made from scratch 
            using the finest ingredients.
          </p>
        </div>
        <div className="about-image">
          <img src="src/images/bakery-interior.jpg" alt="Bakery Interior" />
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="src/images/chef1.jpg" alt="Head Baker" />
            <h3> David Smith</h3>
            <p>Head Baker & Founder</p>
          </div>
          <div className="team-member">
            <img src="src/images/chef 2.jpg" alt="Pastry Chef" />
            <h3>Maria Johnson</h3>
            <p>Pastry Chef</p>
          </div>
          <div className="team-member">
            <img src="src/images/chef3.jpg" alt="Decorator" />
            <h3>Emily Chen</h3>
            <p>Cake Decorator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;