import React from 'react';
import './HeroSection.css'; // Nayi CSS file

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Dream Project Starts Here</h1>
        <p>We provide innovative solutions for your business needs.</p>
        <button className="hero-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;