import React from 'react';
import './Header.css';
function Header() {
  return (
    <header>
      <div className="logo">Logo Here</div>/* Render the logo */
      <nav>
        <ul>
          <li><a href="#">New Releases</a></li>/* Render the "New Releases" link */
          <li><a href="#">Popular Games</a></li>/* Render the "Popular Games" link */
          <li><a href="#">Genres</a></li>/* Render the "Genres" link */
          <li><a href="#">Platforms</a></li>/* Render the "Platforms" link */
          <li><a href="#">Pre-orders</a></li>/* Render the "Pre-orders" link */
          <li><a href="#">Sale</a></li>/* Render the "Sale" link */
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search Games" />/* Render the search input field */
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;
