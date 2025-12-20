import React from 'react';
import customer1 from '../images/customer1.jpg';
import customer2 from '../images/customer2.webp';

function CustomersSay() {
  return (
    <section className="testimonials container">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <img src={customer1} alt="Customer 1" />
          <h3>John Doe</h3>
          <p className="stars">&#11088;&#11088;&#11088;&#11088;&#11088;</p>
          <p>The food was amazing! Highly recommend Little Lemon.</p>
        </div>
        <div className="testimonial-card">
          <img src={customer2} alt="Customer 2" />
          <h3>Jane Smith</h3>
          <p className="stars">&#11088;&#11088;&#11088;&#11088;</p>
          <p>Lovely ambiance and fresh Mediterranean cuisine.</p>
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;
