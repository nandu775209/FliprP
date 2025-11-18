import React from 'react';
import './Navbar.css'; // Nayi CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          FLIPR-PROJECT
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#projects" className="nav-links">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#clients" className="nav-links">Clients</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#subscribe" className="nav-links">Subscribe</a>
          </li>
          {/* Admin panel link */}
          <li className="nav-item">
            <a href="/admin" className="nav-links admin-link">Admin</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;