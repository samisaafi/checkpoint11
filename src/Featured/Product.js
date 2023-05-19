import React from 'react';
import './Product.css';
import l5 from '../assets/4.jpg'
import l6 from '../assets/5.jpg'
import l7 from '../assets/6.jpg'
import l8 from '../assets/7.jpg'

function Product() {
  return (
    <section className="categories">
      <h2>Product Categories</h2>
      <div className="category-list">
        <div className="category">
        <img src={l5} alt="Action Games" /> {/* Render the image for Action Games */}
          <h3>Action Games</h3> {/* Render the title for Action Games */}
          <a href="#">Shop Now</a> {/* Render the "Shop Now" link */}
        </div>
        <div className="category">
          <img src={l8} alt="Adventure Games" /> {/* Render the image for Adventure Games */}
          <h3>Adventure Games</h3> {/* Render the title for Adventure Games */}
          <a href="#">Shop Now</a> {/* Render the "Shop Now" link */}
        </div>
        <div className="category">
          <img src={l6} alt="Simulation Games" /> {/* Render the image for Simulation Games */}
          <h3>Simulation Games</h3> {/* Render the title for Simulation Games */}
          <a href="#">Shop Now</a> {/* Render the "Shop Now" link */}
        </div>
        <div className="category">
          <img src={l7} alt="Strategy Games" /> {/* Render the image for Strategy Games */}
          <h3>Strategy Games</h3> {/* Render the title for Strategy Games */}
          <a href="#">Shop Now</a> {/* Render the "Shop Now" link */}
        </div>
      </div>
    </section>
  );
}


export default Product
