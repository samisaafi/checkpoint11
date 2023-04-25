import React from 'react';
import './Header.css';
function Header() {
  return (
    <header>
      <div className="logo">Logo Here</div>
      <nav>
        <ul>
          <li><a href="#">New Releases</a></li>
          <li><a href="#">Popular Games</a></li>
          <li><a href="#">Genres</a></li>
          <li><a href="#">Platforms</a></li>
          <li><a href="#">Pre-orders</a></li>
          <li><a href="#">Sale</a></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search Games" />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;
