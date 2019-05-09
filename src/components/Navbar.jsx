import React from 'react';
import '../styles/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link 
              to="/"
            >Home</Link>
          </li>
          <li>
            <Link 
              to="/characters"
            >Characters</Link>
          </li>
          <li>
            <Link 
              to="/equipment"
            >Equipment</Link>
          </li>
          <li>
            <Link 
              to="/abilities"
            >Abilities</Link>
          </li>
        </ul>
      </nav>
      <div className="login-link">
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Navbar
