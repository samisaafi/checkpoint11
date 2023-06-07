import React from 'react';
import './FeaturedSection.css';
import l1 from '../assets/1.jpg'
import l2 from '../assets/2.jpg'
import l3 from '../assets/3.jpg'
// FeaturedSection component definition
function FeaturedSection() {
  return (
    <section className="featured">
      <h2>Featured Games</h2>{/* Render the section heading */}
      <div className="game-list">
        <div className="game">
          <img src={l1}/>{/* Render the image for Game 1 */}
          <h3>Battelfield</h3>{/* Render the title for Game 1 */}
          
          <div className="price">$48.99</div>
        </div>
        <div className="game">
          <img src={l2}/>{/* Render the price for Game 2 */}
          <h3>Fifa</h3>{/* Render the title for Game 3 */}
         
          <div className="price">$60.00</div>
        </div>
        <div className="game">
          <img src={l3} />
          <h3>Call of Duty </h3>{/* Render the title for Game 4 */}
        
          <div className="price">$49.99</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
