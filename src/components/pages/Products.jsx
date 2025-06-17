import React from 'react';
import '../styles/App.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Custom Birthday Cakes',
      description: 'Beautifully decorated cakes for any birthday celebration',
      price: '$35 - $120',
      imageurl: 'https://i.pinimg.com/736x/40/ad/7f/40ad7fe003fefa4d45daa27d5e95c5a4.jpg'
    },
    {
      id: 2,
      name: 'Wedding Cakes',
      description: 'Elegant cakes for your special day',
      price: '$200 - $500',
      imageurl: 'https://i.pinimg.com/736x/cb/31/21/cb3121b2b1f223a471b96d1e4e4557bf.jpg'
    },
    {
      id: 3,
      name: 'Assorted Cupcakes',
      description: 'Delicious cupcakes in various flavors',
      price: '$2.50 each or $25/dozen',
      imageurl: 'https://i.pinimg.com/736x/6d/d3/f4/6dd3f426534070096400f54cd7a8f731.jpg'
    },
    {
      id: 4,
      name: 'Artisan Bread',
      description: 'Freshly baked bread made daily',
      price: '$4 - $8 per loaf',
      imageurl: '/https://i.pinimg.com/736x/8c/76/ae/8c76ae70ec9239e2d91af929664f11da.jpg'
    },
    {
      id: 5,
      name: 'Cookies',
      description: 'Classic and specialty cookies',
      price: '$1.50 each or $15/dozen',
      imageurl: 'https://i.pinimg.com/736x/db/03/e5/db03e53c057449564a8c3f285d4ae705.jpg'
    },
    {
      id: 6,
      name: 'Seasonal Pastries',
      description: 'Special treats for each season',
      price: '$3 - $6 each',
      imageurl: 'https://i.pinimg.com/736x/1c/a8/3d/1ca83dc6d7543d869fd3191f67701202.jpg'
    }
  ];

  return (
    <div className="products">
      <section className="products-hero">
        <h1>Our Delicious Products</h1>
      </section>

      <section className="products-list">
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p className="price">{product.price}</p>
              <button className="order-button">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="custom-orders">
        <h2>Custom Orders</h2>
        <p>
          Don't see exactly what you're looking for? We specialize in custom orders to make your 
          special occasion perfect. Contact us to discuss your custom cake or pastry needs.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Products;