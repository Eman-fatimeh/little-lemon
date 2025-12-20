import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
