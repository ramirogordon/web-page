import React from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <div class="navbar">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Equipment</a></li>
          <li><a href="#">Abilities</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
