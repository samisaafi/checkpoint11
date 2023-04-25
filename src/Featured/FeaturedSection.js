import React from 'react';
import './FeaturedSection.css';
import l1 from '../assets/1.jpg'
import l2 from '../assets/2.jpg'
import l3 from '../assets/3.jpg'
function FeaturedSection() {
  return (
    <section className="featured">
      <h2>Featured Games</h2>
      <div className="game-list">
        <div className="game">
          <img src={l1}/>
          <h3>Battelfield</h3>
          
          <div className="price">$48.99</div>
        </div>
        <div className="game">
          <img src={l2}/>
          <h3>Fifa</h3>
         
          <div className="price">$60.00</div>
        </div>
        <div className="game">
          <img src={l3} />
          <h3>Call of Duty </h3>
        
          <div className="price">$49.99</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
