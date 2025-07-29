import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`nav-item ${isActive('/cars') ? 'active' : ''}`}>
          <Link to="/cars">Cars</Link>
        </li>
        <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={`nav-item ${isActive('/my-bookings') ? 'active' : ''}`}>
          <Link to="/my-bookings">My Bookings</Link>
        </li>
        <li className={`nav-item ${isActive('/login') ? 'active' : ''}`}>
          <Link to="/login">Login</Link>
        </li>
        <li className={`nav-item ${isActive('/register') ? 'active' : ''}`}>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
