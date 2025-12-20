import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container">
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </header>
  );
}

export default Header;
