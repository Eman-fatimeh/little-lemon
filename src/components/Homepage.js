import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Highlights from './Highlights';
import CustomersSay from './CustomersSay';
//import Chicago from './Chicago';
import Footer from './Footer';

function Homepage() {
  return (
    <>
     <Header />
      <Hero />
     <Highlights />
      <CustomersSay />
      <Footer />
    </>
  );
}

export default Homepage;
