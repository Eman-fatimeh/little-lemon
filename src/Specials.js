import React from 'react';
import dish1 from '../images/dish1.jpg'; // put image in src/images/

function Specials() {
  return (
    <section className="highlights container">
      <div className="dish-card">
        <img src={dish1} alt="Dish 1" />
        <h3>Dish Name</h3>
        <p>Short description</p>
        <p>$12.99</p>
      </div>
    </section>
  );
}

export default Specials;
