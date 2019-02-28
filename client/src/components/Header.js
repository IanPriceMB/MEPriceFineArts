import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = (props) => (
  <header>
    <nav>
      <div></div>
      <div><Link to='/home'>M.E. Price Fine Art</Link></div>
      <div>
        <ul>
          <li><NavLink to='/home'>Home</NavLink></li>
          <li><NavLink to='/gallery'>Gallery</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/archives'>Archives</NavLink></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;