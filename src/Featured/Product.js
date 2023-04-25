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
        <img src={l5}/>
          <h3>Action Games</h3>
          <a href="#">Shop Now</a>
        </div>
        <div className="category">
        <img src={l8}/>
          <h3>Adventure Games</h3>
          <a href="#">Shop Now</a>
        </div>
        <div className="category">
        <img src={l6}/>
          <h3>Simulation Games</h3>
          <a href="#">Shop Now</a>
        </div>
        <div className="category">
        <img src={l7}/>
          <h3>Strategy Games</h3>
          <a href="#">Shop Now</a>
        </div>
      </div>
    </section>
  );
}

export default Product
