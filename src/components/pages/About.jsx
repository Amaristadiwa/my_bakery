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
          <img src="https://i.pinimg.com/736x/87/4b/54/874b54b948865b0e969a63f4e50adae3.jpg" alt="Bakery Interior" />
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img url="https://i.pinimg.com/736x/19/e3/02/19e3021a3d6fdc62be8839400395c740.jpg" alt="Head Baker" />
            <h3>Maria Johnson</h3>
            <p>Head Baker & Founder</p>
          </div>
          <div className="team-member">
            <img url="https://i.pinimg.com/736x/9a/10/c0/9a10c0d398bd7f789d15a54e77fc153d.jpg" alt="Pastry Chef" />
            <h3>David Smith</h3>
            <p>Pastry Chef</p>
          </div>
          <div className="team-member">
            <img url="https://i.pinimg.com/736x/07/b9/86/07b986cd6ac2d651103afcb11a786360.jpg" alt="Decorator" />
            <h3>Emily Chen</h3>
            <p>Cake Decorator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;