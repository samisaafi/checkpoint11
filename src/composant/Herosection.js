import React from 'react';
import './Herosection.css';
import l4 from '../assets/8.jpg'
// HeroSection component definition

function HeroSection() {
  return (
    <section className="hero">
      <div className="banner">
      <img src={l4}/>/* Render the hero image */
        <button>Shop Now</button>/* Render the "Shop Now" button */
      </div>
    </section>
  );
}

export default HeroSection;
