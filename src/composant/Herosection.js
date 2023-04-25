import React from 'react';
import './Herosection.css';
import l4 from '../assets/8.jpg'
function HeroSection() {
  return (
    <section className="hero">
      <div className="banner">
      <img src={l4}/>
        <button>Shop Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
